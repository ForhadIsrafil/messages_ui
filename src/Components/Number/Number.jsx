import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CreateNumber} from '../../Context/Actions';


const InitialState = {
    number: '',
    response: false,
    status: false
};


class Number extends Component {
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
        const {number} = this.state;
        if (number) {
            !this.state.status && this.setState({
                status: true
            });
            const msg = await this.props.CreateNumber({number});
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
                <h3 className="text-center text-info">Create Number</h3>
                <form ref={this.myform} onSubmit={this.onSubmitHander}>
                    <div className="form-group">
                        <input className="form-control col-11"
                               name="number"
                               placeholder="Number Format +1-xxx-xxx-xxxx(US)"
                               value={this.state.number}
                               onChange={this.changeHandler}
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-info">Create</button>
                    <div className="form-group row mt-2">
                        {this.state.status &&
                        <span className="alert alert-warning col-sm-12">Creating... Please Wait</span>}
                        {this.state.response.status === 201 &&
                        <span className="alert alert-success col-sm-12">Number Successfully Created</span>}
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
    CreateNumber: (payload) => dispatch(CreateNumber(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Number);
