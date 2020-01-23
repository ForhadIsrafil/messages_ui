import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

class Header extends Component {

    render() {
        return (

            <nav className="navbar navbar-expand-lg bg-info">
                <div className="container">
                    <ul className="navbar-fixed-left navbar-nav">
                        <NavLink to="/" exact={true} className="btn btn-info btn-sm text-white"
                                 activeClassName="active">Home</NavLink>
                        <NavLink to="/change-callback-url" className="btn btn-info btn-sm ml-1"
                                 activeClassName="active">
                            Callback URL</NavLink>
                    </ul>

                    <ul className="navbar-nav">
                        <NavLink to="/create-number" className="btn btn-info btn-sm ml-1" activeClassName="active">Create
                            Numbers</NavLink>
                        <NavLink to="/number-list" className="btn btn-info btn-sm ml-1" activeClassName="active">
                            Numbers List</NavLink>
                        <NavLink to="/last-10-history-list" className="btn btn-info btn-sm ml-1"
                                 activeClassName="active">Message
                            History</NavLink>
                        <NavLink to="/chathistory" className="btn btn-info btn-sm ml-1"
                                 activeClassName="active">Chat </NavLink>

                        <NavLink to="/contact-list" className="btn btn-info btn-sm ml-1"
                                 activeClassName="active">Chat Contact </NavLink>

                        <Link to="/logout" className="btn btn-info btn-sm ml-1">Logout</Link>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;