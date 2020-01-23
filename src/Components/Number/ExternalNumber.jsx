import React, {Component} from 'react';
import {connect} from 'react-redux';
import { CreateExternalNumber } from '../../Context/Actions';

const InitialState = {
    cell_phone: '',
    response: false,
    status: false
};

class ExternalNumber extends Component {
    constructor() {
        super()
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
        let system_number = this.props.match.params.system_number;
        const {cell_phone} = this.state;
        if (cell_phone) {
            !this.state.status && this.setState({
                status: true
            });
            const msg = await this.props.CreateExternalNumber({ system_number,cell_phone });
            this.setState({
                response: msg,
                status: false
            })
        } else {
            alert('Field cannot be empty')
        }

        setTimeout(() => {
                this.myform.current.reset();
                this.setState({
                    ...InitialState
                })
        },1000);

    };

    render() {
        return (
            <div className="container bg-light col-3 mt-2">
                <h3 className="text-center text-info">Add Route Number</h3>
                <form ref={this.myform} onSubmit={this.onSubmitHander}>
                    <div className="form-group">
                        <input className="form-control col-11"
                               name="cell_phone"
                               placeholder="Number Format +1-xxx-xxx-xxxx(US)"
                               value={this.state.cell_phone}
                               onChange={this.changeHandler}
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-info">Add</button>
                    <div className="form-group row mt-2">
                        {this.state.status &&
                        <span className="alert alert-warning col-sm-12">Creating... Please Wait</span>}
                        {this.state.response.status === 201 &&
                        <span className="alert alert-success col-sm-12">Route Number Successfully Created</span>}
                        {this.state.response.status === 400 &&
                        <span className="alert alert-danger col-sm-12">  {this.state.response.error}</span>}


                        {this.state.response.status === 500 &&
                        <span className="alert alert-danger col-sm-12"> Creating Failed !!</span>}
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    CreateExternalNumber: (payload) => dispatch(CreateExternalNumber(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExternalNumber);
