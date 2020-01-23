import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from '../Partials/Loading';
import swal from "sweetalert";
import { SignleChatHistory } from "../../Context/Actions"; 
import { Link } from "react-router-dom";
import Moment from 'react-moment'

export class SingleChatHistories extends Component{

    constructor(props) {
        super(props);

    };

    componentDidMount() {
        // console.log('numbers: ',this.props.match.params.contact_number.split(',')[0])
        let contact_number  = this.props.match.params.contact_number.split(',')[0];
        let my_number  = this.props.match.params.contact_number.split(',')[1];
        // console.log('me ',my_number,contact_number)
        this.props.SignleChatHistory({my_number, contact_number}); 

    };

    render(){
        let { single_chat_histories } = this.props;
        return(
            single_chat_histories ?
            single_chat_histories.length === 0 ? <h2 className="text-center text-info">No History Available !!!</h2>:
            <div className="container bg-light col-6 mt-2">
                        <h3 className="text-center text-info">Chat History</h3>
                            {single_chat_histories.map(single_chat_history =>
                                <li key={single_chat_history.id} className="list-group-item mb-2 mt-1 bg-light">
                                    <Link to={`/forward-message/${single_chat_history.id}`}
                                        className='btn btn-info btn-sm float-sm-right'>Forward</Link>
                                    <p className="text-white bg-info w-25 rounded"><b>State: {single_chat_history.state}</b></p>
                                    <p className="text-danger"><b>Message From:</b> {single_chat_history.message_from}</p>
                                    <p><b>Message To:</b> {single_chat_history.message_to}</p>
                                    <p><b>Text:</b> {single_chat_history.text}</p>
                                    {/* <p><b>Direction:</b> {props.message.direction}</p> */}
                                    <p><b>Time: </b>
                                        <Moment format="YYYY/MM/DD HH:mm">
                                            {single_chat_history.time}
                                        </Moment>
                                    </p>
                                </li>
                            )
                            }
                    </div>
                    :<Loading/>
        )
    }
}
const mapStateToProps = (state) => ({
    single_chat_histories: state.message.single_chat_histories,

});

const mapDispatchToProps = (dispatch) => ({
    SignleChatHistory: (payload) => dispatch(SignleChatHistory(payload)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleChatHistories);