// import React from 'react';
// import { connect } from 'react-redux';
// import { SingleMessage } from '../../Context/Actions';
//
//
// export const SinglNotification = (props) =>(
//
//             <div className="container">
//                 <li key={props.id} className="list-group-item mb-2 mt-1 bg-light">
//                     <p className="text-white bg-info w-25 rounded"><b>State: {props.state}</b></p>
//                     <p className="text-danger"><b>Message From:</b> {props.message_from}</p>
//                     <p><b>Message To:</b> {props.message_to}</p>
//                     <p><b>Text:</b> {props.text}</p>
//                     <p><b>Direction:</b> {props.direction}</p>
//                     <p><b>Time:</b> {props.time}</p>
//                 </li>
//             </div>
//         );
//
// const mapDispatchToProps = (dispatch) => ({
//     SingleMessage: (id) => dispatch(SingleMessage(id)),
// });
//
// export const SingleMsgNotify = connect(undefined, mapDispatchToProps)(SinglNotification);


import React, { Component } from 'react';
import { SingleMessage } from '../../Context/Actions';
import { connect } from 'react-redux';
import Loading from "../Partials/Loading";
import '../../Styles/SendMsg.css';
import Moment from 'react-moment'


class ForwardMessage extends Component {

    constructor(props) {
        super(props);

    }

    state = {
        // forward_number: null,
        message_id: null,
        // number_id: '',
        // response: false,
        // status: false
    };
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    };

    componentDidMount() {
        this.props.SingleMessage(this.props.match.params.id);
        this.setState({
            message_id: this.props.match.params.id
        })
    }


    render() {
        let { message } = this.props;
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
                                {/* <p><b>Direction:</b> {message.direction}</p> */}
                                <p><b>Time: </b>
                                    <Moment format="YYYY/MM/DD HH:mm">
                                        {message.time}
                                    </Moment>
                                </p>
                                {message.type === "mms" ?
                                    <div style={{flexDirection: 'row', padding: '10'}}>
                                        {message.media.map(media =>
                                            <img style={{ justifyContent: 'space-between', padding: 5}} width={200} height={200} alt="mms" src={media}/>
                                        )}
                                    </div>: <p></p>
                                }
                            </div>
                        </div>


                    </div>
                : <Loading />
        );
    }
}

const mapStateToProps = (state) => ({
    message: state.message.single_msg
});

const mapDispatchToProps = (dispatch) => ({
    SingleMessage: (id) => dispatch(SingleMessage(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ForwardMessage);

