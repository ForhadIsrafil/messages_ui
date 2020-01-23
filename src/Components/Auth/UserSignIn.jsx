import React from 'react';
import {Link, Redirect} from "react-router-dom";
import { UserSignin } from '../../Context/Actions';
import { connect } from 'react-redux';
// import SignInHeader from "../../Assets/sms-hero-2x.png";


class UserSignIn extends React.Component{
    state = {
        email: '',
        password: '',
        response: false,
		status: false
    };
    changHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

	componentDidUpdate() {
		this.state.response && setTimeout(() => {
			this.setState({
				response: false
			})
		}, 2000)
    }
    
	signInHander = async e => {
		e.preventDefault();
		const { email, password } = this.state;
		if (email && password) {
			!this.state.status && this.setState({
				status: true
			});
			const signin_msg = await this.props.UserSignin({email, password});
			this.setState({
				response: signin_msg,
				status: false
			})
		} else {
			alert('Field cannot be empty')
		}
	};

    render(){

        return(
            <div className='container bg-light col-4 mt-5'>

                <h3>Signin</h3>
                <form onSubmit={this.signInHander} >
                    <div className='form-group'>
                        <label>Email</label>
						<input className="form-control" type="email"
							name="email"
							placeholder="Email"
							value={this.state.email}
							onChange={this.changHandler}
						/>
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
						<input className="form-control" type="password"
							name="password"
							placeholder="Password"
							value={this.state.password}
							onChange={this.changHandler}
						/>
                    </div>

					<small> Don't have an account ? <Link to={`/signup`} >Signup  </Link> here </small> <br />

                    <button type="submit" className="btn btn-outline-info">Signin</button>
					<div className="form-group row mt-4">
						{this.state.status && <span className="alert alert-warning col-sm-12">Signin... Please Wait</span>}
						{this.state.response.status === true && <span className="alert alert-success col-sm-12">Signin Successfully</span> &&
						 <Redirect to="/message-history"/>}
						{this.state.response.status === 400 && <span className="alert alert-danger col-sm-12"> {this.props.errorSummary}</span>}
						{this.state.response.status === 500 &&
                        <span className="alert alert-danger col-sm-12"> Creating Failed Or Server Error!!</span>}
					</div>
                </form>
            </div>
        )
    }
}

// export default UserSignIn;

const mapStateToProps = (state) => ({
	errorSummary: state.app.errorSummary
});

const mapDispatchToProps = (dispatch) => ({
	UserSignin: (payload) => dispatch(UserSignin(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSignIn);