import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from '../Partials/Loading';
import { NumberList } from "../../Context/Actions";
// import { DeleteNumber } from "../../Context/Actions";
// import swal from "sweetalert";
import axios from 'axios';
import { api } from '../../Context/Constant';
import { Link } from "react-router-dom";


const InitialState = {
    number_id: '',
    response: false,
    status: false
};
class NumberLists extends Component {

    constructor() {
        super();
    };

    componentDidMount() {
        this.props.NumberList();

    }

    state = InitialState;

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    };


    // deleteHandler = async (token) =>{
    //     // e.preventDefault();
    //     console.log('token ',token)
    //     const headers = {
    //         "Content-Type": "application/json",
    //         "Authorization": "Bearer " + token
    //     };
    //     const res = await axios.delete(api.endpoint.delete_number + this.state.number_id, {headers: headers})
    //         .then(response => response.data)
    //         .then(result => this.setState({
    //             response: result,
    //         }))
    //         .catch(e => console.log(e));
    // }

    onSubmitHandler = async e => {
        e.preventDefault();
        const { number_id } = this.state;
        if (number_id) {
            !this.state.status && this.setState({
                status: true
            });
            // console.log('number id',this.state.number_id, this.state.status);
            const headers = {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + this.props.token
            };
            const res = await axios.delete(api.endpoint.delete_number + this.state.number_id, {headers: headers})
                .then(response => response.data)
                .then(result => this.setState({
                    response: result,
                }))
                .catch(e); //catch(e => console.log(e));
        };
        window.location.href = api.endpoint.web_number_list

 
    };

    render() {
        let { numbers } = this.props;
        // console.log('in render number_id ',this.state.number_id);
        // console.log('response ',numbers);

        return (
            numbers ?
                numbers.length === 0 ? <h2 className="text-center text-info">No Numbers Available !!!</h2>:
                    <div className="container bg-light col-4 mt-2">
                        <h3 className="text-center text-info">Number List</h3>
                            {numbers.map(number =>
                                <li key={number.id} className="list-group-item mb-1">
                                    <form onSubmit={this.onSubmitHandler}>
                                    <span className="text-info" >{number.number}</span>
                                    <button type="submit" name='number_id' value={number.id} 
                                    onChange={this.changeHandler}
                                    onClick={this.changeHandler} className="btn btn-outline-danger btn-sm mr-1 float-right">Delete</button>
                                    <Link to={`/route-list/${number.number}`}
                                    className='btn btn-outline-info btn-sm mr-1 float-right'>Route List</Link>
                                    <Link to={`/add-route/${number.number}`}
                                    className='btn btn-outline-info btn-sm mr-1 float-right'>Add Route</Link>                               
                                     </form>
                                </li>
                            )
                            }
                    </div>
                    :<Loading/>
        );
    }
}

const mapStateToProps = (state) => ({
    numbers: state.message.numbers,
    token: state.app.token

});

const mapDispatchToProps = (dispatch) => ({
    NumberList: () => dispatch(NumberList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NumberLists);