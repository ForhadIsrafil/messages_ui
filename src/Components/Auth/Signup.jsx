import React from 'react';
import { connect } from 'react-redux';
import { UserSignup } from '../../Context/Actions';
import {Link} from "react-router-dom";

const InitialState = {
	firstname: '',
	lastname: '',
	email: '',
	password: '',
	response: false,
	status: false
};
class SignUp extends React.Component{
	state = InitialState;
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
    
	signUpHander = async e => {
		e.preventDefault();
		const { firstname, lastname, email, password } = this.state;
		if (email && password) {
			!this.state.status && this.setState({
				status: true
			});
			const signup_msg = await this.props.UserSignup({firstname, lastname, email, password})
			this.setState({
				response: signup_msg,
				status: false
			})
		} else {
			alert('Field cannot be empty')
		}
	};

    render(){

        return(
            <div className='container bg-light col-4 mt-5'>
                <h3>Signup</h3>
                <form onSubmit={this.signUpHander} >
                    <div className='form-group'>
                        <label>First Name</label>
						<input className="form-control"
							name="firstname"
							placeholder="First Name"
							value={this.state.firstname}
							onChange={this.changHandler}
						/>
                    </div>
                    <div className='form-group'>
                        <label>Last Name</label>
						<input className="form-control"
							name="lastname"
							placeholder="Last Name"
							value={this.state.lastname}
							onChange={this.changHandler}
						/>
                    </div>
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
					<small> Already have an account ? <Link to={`/signin`} >Signin  </Link> here </small> <br />
                    <button type="submit" className="btn btn-outline-info">Signup</button>
					<div className="form-group row mt-4">
						{this.state.status && <span className="alert alert-warning col-sm-12">Signup... Please Wait</span>}
						{this.state.response.status === true && <span className="alert alert-success col-sm-12">Signup Successfully. Please login with your email. </span>}
						{this.state.response.status === 400 && <span className="alert alert-danger col-sm-12"> {this.props.errorCauses[0].errorSummary} </span>}
					</div>
                </form>
            </div>
        )
    }
}



const mapStateToProps = (state) => ({

	errorCauses: state.app.errorCauses

});

const mapDispatchToProps = (dispatch) => ({
	UserSignup: (payload) => dispatch(UserSignup(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);