import React, {Component} from 'react';
import {SingleMessage} from '../../Context/Actions';
import {connect} from 'react-redux';
import Loading from "../Partials/Loading";
import '../../Styles/SendMsg.css';
import {ForwardMsg} from '../../Context/Actions';
import {NumberList} from '../../Context/Actions';
import {Redirect} from "react-router-dom";
import swal from 'sweetalert';
import Moment from 'react-moment'

class ForwardMessage extends Component {

    constructor(props) {
        super(props);

    }

    state = {
        forward_number: null,
        message_id: null,
        message_from: '',
        response: false,
        status: false
    };
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    };

    componentDidMount() {
        this.props.SingleMessage(this.props.match.params.id);
        this.props.NumberList();
        this.setState({
            message_id: this.props.match.params.id
        })
    }


    onSubmitHander = async e => {
        e.preventDefault();
        const {message_id, forward_number, message_from} = this.state;
        if (message_id && forward_number && message_from) {
            !this.state.status && this.setState({
                status: true
            });
            const msg = await this.props.ForwardMsg({message_id, forward_number, message_from});
            this.setState({
                response: msg,
                status: false
            })
        } else {
            swal({
                title: "Warning!",
                text: "Field cannot be empty!",
                icon: "warning",
                button: "okay !",
            });
        }
    };


    render() {
        let {message} = this.props;// dischargering here
        let {numbers} = this.props;
        return (

            message ?
                message.status === 401 ? <h2 className="text-center">Unauthorized</h2> :
                    <div className="container mt-4">

                        <div className="row">
                            <div className="col-sm-6">
                                {/* <p style={{color: 'red'}}>Message ID: {message.message_id}</p> */}
                                <p className="text-white bg-info rounded"><b>State: {message.state}</b></p>
                                <p className="text-white bg-info w-25 rounded"><b>Type: {message.type}</b></p>
                                <p className="text-danger"><b>Message From:</b> {message.message_from}</p>
                                <p><b>Message To:</b> {message.message_to}</p>
                                <p><b>Text:</b> {message.text}</p>
                                {/* <p><b>Direction:</b> {message.direction}</p>*/}
                                <p><b>Time: </b>
                                    <Moment format="YYYY/MM/DD HH:mm">
                                        {message.time}
                                    </Moment></p>

                                {message.type === "mms" ?
                                    <div style={{flexDirection: 'row', padding: '10'}}>
                                        {message.media.map(media =>
                                            <img style={{justifyContent: 'space-between', padding: 5}} width={200}
                                                 height={200} alt="mms" src={media}/>
                                        )}

                                    </div>
                                    : <p></p>
                                }

                            </div>
                            <form onSubmit={this.onSubmitHander} className="col-sm-6">
                                <div className="form-group">
                                    <label>Forward To</label>
                                    <input className="form-control col-7"
                                           name="forward_number"
                                           placeholder="Enter a number +1-xxx-xxx-xxxx(US)"
                                           value={this.state.forward_number}
                                           onChange={this.changeHandler}
                                    />
                                </div>
                                <div className="form-group">
                                    <select className="form-control col-6" onChange={this.changeHandler}
                                            name="message_from">
                                        <option>Select Number</option>
                                        {numbers ? numbers.map(number =>
                                            <option key={number.id} value={number.number}>{number.number}</option>
                                        ) : <h3> No Number available </h3>
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-outline-info">Send</button>
                                </div>
                                <div className="form-group row mt-4">
                                    {this.state.status &&
                                    <span className="alert alert-warning col-sm-12">Forwarding... Please Wait</span>}
                                    {this.state.response.status === 201 &&
                                    setTimeout(
                                        swal({
                                            title: "Success!",
                                            text: "SMS Successfully Forwarded!",
                                            icon: "success",
                                            button: "okay !",
                                        }),
                                        5000) &&
                                    <Redirect to="/last-10-history-list"/>}

                                    {this.state.response.status === 400 &&
                                    <span className="alert alert-danger col-sm-12">{this.state.response.error}</span>}
                                    {this.state.response.status === 500 &&
                                    <span className="alert alert-danger col-sm-12"> Forwarding Failed !!</span>}
                                </div>
                            </form>

                        </div>


                    </div>
                : <Loading/>
        );
    }
}

const mapStateToProps = (state) => ({
    message: state.message.single_msg,
    numbers: state.message.numbers
});

const mapDispatchToProps = (dispatch) => ({

    NumberList: () => dispatch(NumberList()),
    SingleMessage: (id) => dispatch(SingleMessage(id)),
    ForwardMsg: (payload) => dispatch(ForwardMsg(payload)),

});

export default connect(mapStateToProps, mapDispatchToProps)(ForwardMessage);
