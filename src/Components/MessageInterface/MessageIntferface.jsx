import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '../../Styles/chathistory.css';
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import Button from "react-bootstrap/es/Button";


class MessageInterface extends React.Component {

    render() {

        return (

            <div id="frame" className="chatMessage">
                <div id="sidepanel">
                    <div id="profile">
                        <div class="wrap">
                            <img id="profile-img" src="http://emilcarlsson.se/assets/mikeross.png" class="online"
                                 alt=""/>
                            <p>Mike Ross</p>
                            <i class="fa fa-chevron-down expand-button" aria-hidden="true"></i>
                            <div id="status-options">
                                <ul>
                                    <li id="status-online" class="active"><span class="status-circle"></span>
                                        <p>Online</p></li>
                                    <li id="status-away"><span class="status-circle"></span> <p>Away</p></li>
                                    <li id="status-busy"><span class="status-circle"></span> <p>Busy</p></li>
                                    <li id="status-offline"><span class="status-circle"></span> <p>Offline</p></li>
                                </ul>
                            </div>
                            <div id="expanded">
                                <label for="twitter"><i class="fa fa-facebook fa-fw" aria-hidden="true"></i></label>
                                <input name="twitter" type="text" value="mikeross"/>
                                <label for="twitter"><i class="fa fa-twitter fa-fw" aria-hidden="true"></i></label>
                                <input name="twitter" type="text" value="ross81"/>
                                <label for="twitter"><i class="fa fa-instagram fa-fw" aria-hidden="true"></i></label>
                                <input name="twitter" type="text" value="mike.ross"/>
                            </div>
                        </div>
                    </div>
                    <div className="searchInput">
                        <input type="text" placeholder="Search contacts..."/>
                    </div>
                    <div id="contacts">
                        <ul>
                            <li class="contact">
                                <div class="wrap">
                                    <img src="http://emilcarlsson.se/assets/louislitt.png" alt=""/>
                                    <div class="meta">
                                        <p class="name">Louis Litt</p>
                                        <p class="preview">You just got LITT up, Mike.</p>
                                    </div>
                                </div>
                            </li>
                            <li class="contact active">
                                <div class="wrap">
                                    <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt=""/>
                                    <div class="meta">
                                        <p class="name">Harvey Specter</p>
                                        <p class="preview">Wrong. You take the gun, or you pull out a bigger one. Or,
                                            you call their bluff. Or, you do any one of a hundred and forty six other
                                            things.</p>
                                    </div>
                                </div>
                            </li>


                            <li class="contact">
                                <div class="wrap">
                                    <img src="http://emilcarlsson.se/assets/danielhardman.png" alt=""/>
                                    <div class="meta">
                                        <p class="name">Daniel Hardman</p>
                                        <p class="preview">We'll meet again, Mike. Tell Jessica I said 'Hi'.</p>
                                    </div>
                                </div>
                            </li>
                            <li class="contact">
                                <div class="wrap">
                                    <img src="http://emilcarlsson.se/assets/katrinabennett.png" alt=""/>
                                    <div class="meta">
                                        <p class="name">Katrina Bennett</p>
                                        <p class="preview">I've sent you the files for the Garrett trial.</p>
                                    </div>
                                </div>
                            </li>


                            <li class="contact">
                                <div class="wrap">
                                    <img src="http://emilcarlsson.se/assets/danielhardman.png" alt=""/>
                                    <div class="meta">
                                        <p class="name">Daniel Hardman</p>
                                        <p class="preview">We'll meet again, Mike. Tell Jessica I said 'Hi'.</p>
                                    </div>
                                </div>
                            </li>
                            <li class="contact">
                                <div class="wrap">
                                    <img src="http://emilcarlsson.se/assets/katrinabennett.png" alt=""/>
                                    <div class="meta">
                                        <p class="name">Katrina Bennett</p>
                                        <p class="preview">I've sent you the files for the Garrett trial.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="content">
                    <div class="messages">
                        <ul>
                            <li class="sent">
                                <img src="http://emilcarlsson.se/assets/mikeross.png" alt=""/>
                                <p>How the hell am I supposed to get a jury to believe you when I am not even sure that
                                    I do?!</p>
                            </li>
                            <li class="replies">
                                <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt=""/>
                                <p>When you're backed against the wall, break the god damn thing down.</p>
                            </li>
                            <li class="replies">
                                <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt=""/>
                                <p>Excuses don't win championships.</p>
                            </li>
                            <li class="sent">
                                <img src="http://emilcarlsson.se/assets/mikeross.png" alt=""/>
                                <p>Oh yeah, did Michael Jordan tell you that?</p>
                            </li>
                            <li class="replies">
                                <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt=""/>
                                <p>No, I told him that.</p>
                            </li>
                            <li class="replies">
                                <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt=""/>
                                <p>What are your choices when someone puts a gun to your head?</p>
                            </li>
                            <li class="sent">
                                <img src="http://emilcarlsson.se/assets/mikeross.png" alt=""/>
                                <p>What are you talking about? You do what they say or they shoot you.</p>
                            </li>
                            <li class="replies">
                                <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt=""/>
                                <p>Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or,
                                    you do any one of a hundred and forty six other things.</p>
                            </li>
                        </ul>
                    </div>
                    <div class="message-input wrap">
                        <div class="wrap">
                            <textarea type="text-area" placeholder="Write your message..." />
                            <Button variant="success" className='sendButton'><FontAwesomeIcon
                                icon={faPaperPlane}/></Button>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default MessageInterface;
