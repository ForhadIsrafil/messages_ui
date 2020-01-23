import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import Moment from 'react-moment'

export const SingleMsg = (props) =>

    (

        <div className="container">
            <li key={props.message.id} className="list-group-item mb-2 mt-1 bg-light">
                <Link to={`/forward-message/${props.message.id}`}
                      className='btn btn-info btn-sm float-sm-right'>Forward</Link>
                <p className="text-white bg-info w-25 rounded"><b>State: {props.message.state}</b></p>
                <p className="text-white bg-info w-25 rounded"><b>Type: {props.message.type}</b></p>
                <p className="text-danger"><b>Message From:</b> {props.message.message_from}</p>
                <p><b>Message To:</b> {props.message.message_to}</p>
                <p><b>Text:</b> {props.message.text}</p>
                {/* <p><b>Direction:</b> {props.message.direction}</p> */}
                <p><b>Time: </b>
                    <Moment format="YYYY/MM/DD HH:mm">
                        {props.message.time}
                    </Moment>
                </p>
                {props.message.type === "mms" ?

                        <div style={{flexDirection: 'row', padding: '10'}}>

                            {props.message.media.map(media =>
                                <img style={{ justifyContent: 'space-between', padding: 5}} width={200} height={200} alt="mms" src={media}/>
                            )}

                        </div>

                    : <p></p>

                }


            </li>
        </div>
    );

const mapDispatchToProps = (dispatch) => ({});

export const SingleMessage = connect(undefined, mapDispatchToProps)(SingleMsg);
