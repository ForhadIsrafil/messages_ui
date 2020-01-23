import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CreateCallbackUrl } from '../../Context/Actions';
import swal from "sweetalert";


const InitialState = {
    url: '',
    response: false,
    status: false
};

class CallbackUrl extends Component {
    constructor() {
        super();
        this.myform = React.createRef()
    }

    state = InitialState;
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    };

    onSubmitHander = async e => {
        e.preventDefault();
        const { url } = this.state;
        if (url) {
            !this.state.status && this.setState({
                status: true
            });
            const msg = await this.props.CreateCallbackUrl({ url });
            this.setState({
                response: msg,
                status: false
            })
        } else {
            swal({
                title: "Warning!",
                text: "Field cannot be empty!",
                icon: "warning",
                button: "okay !",
            });
        }


        setTimeout(() => {
            this.myform.current.reset();
            this.setState({
                ...InitialState
            })
        }, 1000);

    };

    render() {
        return (
            <div className="container bg-light col-4 mt-4">
                <h3 className="text-center text-info">Change Callback URL</h3>
                <form ref={this.myform} onSubmit={this.onSubmitHander}>
                    <div className="form-group">
                        <input className="form-control"
                            name="url"
                            placeholder="URL"
                            type="url"
                            value={this.state.url}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-info">Change</button>
                    <div className="form-group row mt-2">
                        {this.state.status &&
                            <span className="alert alert-warning col-sm-12">Changing... Please Wait</span>}
                        {this.state.response.status === 201 &&
                            swal({
                                title: "Success!",
                                text: "Callback URL Successfully Changed!",
                                icon: "success",
                                button: "okay !",
                            }) && true}
                        {this.state.response.status === 400 &&
                            <span className="alert alert-danger col-sm-12">  {this.state.response.error}</span>}


                        {this.state.response.status === 500 &&
                            <span className="alert alert-danger col-sm-12"> Change Failed !!</span>}
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    CreateCallbackUrl: (payload) => dispatch(CreateCallbackUrl(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(CallbackUrl);
