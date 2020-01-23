import React from 'react';
import Moment from 'react-moment'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

export const Ntifications = (props) =>
    (

        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <h5 className="card-title text-danger text-center b">Notifications</h5>
                    <ul className="list-group">
                        {props.notifications && props.notifications.results.map(item => {
                            return (
                                <li className="list-group-item" key={item.id}>
                                    <Link to={`/single-notification/${item.id}`} target="_blank">
                                        You have a new message from: <b>{item.message_from}</b> <br />
                                        <Moment className="text-info" fromNow>
                                            {item.time}
                                        </Moment>
                                    </Link>
                                   
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );

const mapDispatchToProps = (dispatch) => ({
});

export const Notifications = connect(undefined, mapDispatchToProps)(Ntifications);
