import React from 'react';
import {connect} from 'react-redux';
import {MessageList} from '../../Context/Actions';
import {NotificationList} from '../../Context/Actions';
import Loading from '../Partials/Loading';
import {Notifications} from '../Partials/Notification';
import {SingleMessage} from '../Partials/SingleMessage';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import { api } from '../../Context/Constant';


class MessageHistory extends React.Component {

    state = {
        page: 1,
        page_start: 1,
        num_of_item: 5,
        notifications: null
    };

    async fetchNotifications(token) {
        var is_fetchNotifications = localStorage.getItem('is_fetchNotifications', null);

        if (is_fetchNotifications== 1) {


            const headers = {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            };

            const res = await axios.get(api.endpoint.notification_list, {headers: headers})
                .then(response => response.data)
                .then(result => this.setState({
                    notifications: result,
                }))
                .catch(e => console.log(e));
        }
    }

    componentDidMount() {
        this.props.MessageList();
        this.fetchNotifications();

        localStorage.setItem('is_fetchNotifications', 1);
        if(this.props.token) {

            this.timer = setInterval(() => {this.fetchNotifications(this.props.token)}, 15000);
        }
    }

    componentWillUnmount() {
        // this.timer = null;

    }


    render() {
        let {api_responses} = this.props;

        let pagination = [];
        let total_page = api_responses && Math.ceil(api_responses.count / this.state.num_of_item);

        for (let i = this.state.page_start; i <= total_page; i++) {
            pagination.push(<li key={i} className={`page-item ${i === this.state.page && 'active'}`}>
                <button className="page-link" onClick={(e) => {
                    e.preventDefault();
                    this.setState({
                        page: i
                    })
                }}>{i}</button>
            </li>)
        }
        let start = (this.state.page - 1) * this.state.num_of_item;
        let end = (this.state.page * this.state.num_of_item);

        return (
            api_responses ?
                api_responses.count === 0 ? <h2 className="text-center text-info">No History Available !!!</h2> :
                    <div className="container">
                        <div className="row">
                            <div className="mt-1 col-7">
                                <ul className="list-group">

                                    {api_responses.results.slice(start, end).map(message =>

                                        <SingleMessage message={message} key={message.id}/>
                                    )}
                                </ul>

                                {/* START OF PAGINATION */}
                                <div className="card m-b-20" style={{border: 0, float: 'right'}}>
                                    <div className="card-body">
                                        <nav aria-label="...">
                                            <ul className="pagination">
                                                {this.state.page === 1 ?
                                                    <li className="page-item disabled">
                                                        <span className="page-link">Previous</span>
                                                    </li> :
                                                    <li className="page-item">
                                                        <a onClick={(e) => {
                                                            e.preventDefault();
                                                            this.setState((prevState) => {
                                                                if (prevState.page !== 1) prevState.page = prevState.page - 1;
                                                                return prevState;
                                                            })
                                                        }} className="page-link" href="#previous">Previous</a>
                                                    </li>
                                                }

                                                {pagination}

                                                {api_responses.results && (this.state.page * this.state.num_of_item) >= api_responses.count ?
                                                    <li className="page-item disabled">
                                                        <span className="page-link">Next</span>
                                                    </li> :
                                                    <li className="page-item">
                                                        <a onClick={(e) => {
                                                            e.preventDefault();
                                                            this.setState((prevState) => {
                                                                if ((prevState.page * prevState.num_of_item) < api_responses.count) prevState.page = prevState.page + 1;
                                                                return prevState;
                                                            })
                                                        }} className="page-link" href="#next">Next</a>
                                                    </li>
                                                }
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                {/* END OF PAGINATION */}


                            </div>

                            <div style={{ marginTop:10}}>
                                {this.state.notifications ?
                                    <Notifications notifications={this.state.notifications}/> : ( <div className="section">
                                        <div className="card z-depth-0">
                                            <div className="card-content" style={{width: 378}}>
                                                <h5 className="card-title text-danger text-center b">Notifications</h5>
                                                <div style={{textAlign:'center'}}> <Loader/></div>
                                            </div>
                                        </div>
                                    </div>
                                    )

                                }

                            </div>
                        </div>


                    </div>

                : <Loading/>
        );
    }
}

const mapStateToProps = (state) => ({
    api_responses: state.message.messages,
    token: state.app.token
});

const mapDispatchToProps = (dispatch) => ({
    MessageList: () => dispatch(MessageList())
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageHistory);
