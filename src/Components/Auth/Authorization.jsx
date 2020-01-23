import React from 'react';
import Loading from '../Partials/Loading';
import { getToken } from '../../Context/Actions';
import { connect } from 'react-redux' 
import Popup from '../Partials/Popup';

class Authorization extends React.Component{
    state = {
        msg: null
    };
    
    async componentDidMount() {
        var search = this.props.location.search.substring(1);
        const q = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
        const getToken = await this.props.getToken(q.code);
        if(!getToken) {
            this.setState({
                msg: "We can't find your account on our system. Please sign up first...!"
            })
        } else {
            this.setState({
                msg: null
            });
            this.props.history.push('/')
        }
    }

    onClick = () => {
        this.props.history.push('/logout');
    };


    render() {
        this.props.token && this.props.history.push('/');
        return (
            !this.state.msg ? <Loading 
                msg="Please Wait..."
            /> : <Popup 
                    msg={this.state.msg}
                    onClick={this.onClick}
                />
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.app.token
});

const mapDispatchToProps = (dispatch) => ({
    getToken: (code) => dispatch(getToken(code))
});

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);