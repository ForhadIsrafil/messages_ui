import React from 'react';
import Loading from '../Partials/Loading';
import {LogoutUser} from '../../Context/Actions';
import {connect} from 'react-redux';
// import {WEBURL} from "../../Context/Constant";

class Logout extends React.Component {

    componentDidMount() {
        this.props.LogoutUser();
        localStorage.clear();
        localStorage.setItem('is_fetchNotifications', 0);
        // var url = 'https://dev-335783.oktapreview.com/oauth2/default/v1/logout?id_token_hint='+this.props.id_token+'&post_logout_redirect_uri='+WEBURL;
        //
        // window.location.href = url;
        //         this.props.LogoutUser();

    }

    render() {
        return (
            <Loading
                msg="Logging Out..."
            />
        )
    }
}


const mapStateToProps = (state) => ({
    id_token: state.app.id_token
});


const mapDispatchToProps = (dispatch) => ({
    LogoutUser: () => dispatch(LogoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);