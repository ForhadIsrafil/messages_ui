import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../Styles/SendMsg.css';
import {Redirect} from 'react-router-dom';
import {NumberList} from '../../Context/Actions';
import {SendMessage} from '../../Context/Actions';
import swal from "sweetalert";


class SendMsg extends Component {

    constructor() {
        super();
    };

    componentDidMount() {
        this.props.NumberList();

    }

    state = {
        message: '',
        message_to: '',
        message_from: '',
        response: false,
        status: false
    };
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    };

    componentDidUpdate() {
        this.state.response && setTimeout(() => {
            this.setState({
                response: false
            })
        }, 10000)
    };

    onSubmitHander = async e => {
        e.preventDefault();
        const {message, message_to, message_from} = this.state;
        if (message && message_to && message_from) {
            !this.state.status && this.setState({
                status: true
            });
            const msg = await this.props.SendMessage({message, message_to, message_from});

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
        let {numbers} = this.props;
        // console.log('numbers ', numbers)
        return (
            <div className="container bg-light col-4 mt-2">
                <h3 className="text-center text-info">Send Message</h3>
                <form ref={this.myform} onSubmit={this.onSubmitHander}>
                    <div className="form-group ">
                        <label>Message:</label>
                        <textarea className="form-control"
                                  name="message"
                                  placeholder="Write Message............"
                                  value={this.state.message}
                                  onChange={this.changeHandler}
                        >
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label>Message To:</label>
                        <input className="form-control col-8"
                               name="message_to"
                               placeholder="Enter a number +1-xxx-xxx-xxxx(US)"
                               value={this.state.message_to}
                               onChange={this.changeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <select className="form-control col-8" onChange={this.changeHandler} name="message_from">
                            <option>Select Number</option>
                            {numbers ?
                                numbers.map(number =>
                                    <option key={number.id} value={number.number}>{number.number}</option>
                                ): <option>No Number Available!</option>
                            }
                        </select>
                    </div>
                    <button type="submit" className="btn btn-outline-info">Send</button>
                    <div className="form-group row mt-4">
                        {this.state.status &&
                        <span className="alert alert-warning col-sm-12">Sending... Please Wait</span>}
                        
                        {this.state.response.status === 201 &&
                        swal({
                            title: "Success!",
                            text: "SMS Successfully Send!",
                            icon: "success",
                            button: "okay !",
                        })  &&  <Redirect to="/last-10-history-list"/>}

                        {this.state.response.status === 400 &&
                        <span className="alert alert-danger col-sm-12"> {this.state.response.error}</span>}
                        {this.state.response.status === 500 &&
                        <span className="alert alert-danger col-sm-12"> Sending Failed !!</span>}
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    numbers: state.message.numbers

});

const mapDispatchToProps = (dispatch) => ({
    NumberList: () => dispatch(NumberList()),
    SendMessage: (payload) => dispatch(SendMessage(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(SendMsg);
