import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Switch, Route } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import PrivateRoute from './PrivateRoute';
import SignIn from '../Components/Auth/Signin';
import NotFound from '../Components/NotFound';
import SignUp from '../Components/Auth/Signup';
import SendMsg from '../Components/Message/SendMsg';
import MessageHistory from '../Components/Message/MessageHistory';
// import ContactLists from '../Components/Message/ContactLists';
import SingleChatHistories from '../Components/Message/SingleChatHistories';
import Authorization from '../Components/Auth/Authorization';
import Logout from '../Components/Auth/Logout';
import Number from '../Components/Number/Number'
import ExternalNumber from '../Components/Number/ExternalNumber'
import RouteList from '../Components/Number/RouteList'
import ForwardMessage from '../Components/Number/ForwardMessage'
import CallbackUrl from '../Components/CallbackUrl/CallbackUrl'
import SingleMsgNotify  from '../Components/Partials/SingleNotification'
import UserSignIn from '../Components/Auth/UserSignIn';
import NumberLists from '../Components/Number/NumberList';
import ContactLists from '../Components/Number/ContactList';
import MessageIntferface from '../Components/MessageInterface/MessageIntferface';

export const history = createHistory();

class AppRouter extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Switch>
                        <PrivateRoute path="/" exact={true} component={SendMsg} />
                        <PrivateRoute path="/last-10-history-list" exact={true} component={MessageHistory} />
                        <PrivateRoute path="/signle-chat-history/:contact_number" exact={true} component={SingleChatHistories} />
                        <PrivateRoute path="/contact-list" exact={true} component={ContactLists} />
                        <AuthRoute path="/browser-signin" exact={true} component={SignIn} />
                        <AuthRoute path="/signin" exact={true} component={UserSignIn} />
                        <AuthRoute path="/signup" exact={true} component={SignUp} />
                        <PrivateRoute path="/logout" exact={true} component={Logout} />
                        <PrivateRoute path="/change-callback-url" exact={true} component={CallbackUrl} />                        
                        <PrivateRoute path="/create-number" exact={true} component={Number} />
                        <PrivateRoute path="/add-route/:system_number" exact={true} component={ExternalNumber} />
                        <PrivateRoute path="/route-list/:system_number" exact={true} component={RouteList} />
                        <PrivateRoute path="/number-list" exact={true} component={NumberLists} />
                        <PrivateRoute path="/forward-message/:id" exact={true} component={ForwardMessage}  />
                        <PrivateRoute path="/chathistory" exact={true} component={MessageIntferface}  />
                        <PrivateRoute path="/single-notification/:id" exact={true} component={SingleMsgNotify} />
                        <Route path="/authorization-code/callback" exact={true} component={Authorization} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default AppRouter;