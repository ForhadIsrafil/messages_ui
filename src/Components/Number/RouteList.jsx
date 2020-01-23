import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from '../Partials/Loading';
import { RouteLists } from "../../Context/Actions";
import axios from 'axios';
import { api } from '../../Context/Constant';
import { Link } from "react-router-dom";


const InitialState = {
    number_id: '',
    response: false,
    status: false
};
class RouteList extends Component {

    constructor() {
        super();
    };

    componentDidMount() {
        // let {system_number} = this.props.match.params.system_number;
        this.props.RouteLists(this.props.match.params.system_number);

    }

    // componentDidUpdate() {
    //     setTimeout(() => {
    //         this.props.RouteLists(this.props.match.params.system_number);
    //     }, 10000)
    // };

    state = InitialState;

    // changeHandler = event => {
    //     this.setState({
    //         [event.target.name]: event.target.value,
    //     })
    // };


    render() {
        let { routes } = this.props;
        console.log(routes);
        return (
            routes ?
            routes.length === 0 ? <h2 className="text-center text-info">No Route Available !!!</h2>:
                    <div className="container bg-light col-4 mt-2">
                        <h3 className="text-center text-info">Route List</h3>
                            {routes.map(route =>
                                <li key={route.id} className="list-group-item mb-1">
                                    <form onSubmit={this.onSubmitHandler}>
                                    {/* <span className="text-info" >{route.source}</span> */}
                                    <span className="text-info" >{route.e164}</span>
                                    {/* <button type="submit" name='number_id' value={route.id} 
                                    onChange={this.changeHandler}
                                    onClick={this.changeHandler} className="btn btn-outline-danger btn-sm mr-1 float-right">Delete</button>
                                    <Link to={`/add-route/${route.number}`}
                                    className='btn btn-outline-info btn-sm mr-1 float-right'>Route List</Link>
                                    <Link to={`/add-route/${route.number}`}
                                    className='btn btn-outline-info btn-sm mr-1 float-right'>Add Route</Link>                                */}
                                     </form>
                                </li>
                            )
                            }
                    </div>
                    :''//<Loading/>
        );
    }
}

const mapStateToProps = (state) => ({
    routes: state.message.routes,
    // token: state.app.token
});

const mapDispatchToProps = (dispatch) => ({
    RouteLists: (system_number) => dispatch(RouteLists(system_number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RouteList);