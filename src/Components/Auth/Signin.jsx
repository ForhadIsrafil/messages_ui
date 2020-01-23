import React from 'react';
import SignInHeader from '../../Assets/sms-hero-2x.png'
import { api } from '../../Context/Constant';


class SignIn extends React.Component{
    SignInHander = e => {
        e.preventDefault();
        window.location.href = api.endpoint.okta_login
    };
    render() {
        return(
            <div className="text-center">
                <img class="img-fluid" src={SignInHeader} alt="Okta Message" style={{width: '100%',height:"480px"}}/>
                <button className="btn btn-info btn-lg mb-5" onClick={this.SignInHander}>Signin with Okta</button>
            </div>
        )
    }
}

export default SignIn;