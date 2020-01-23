import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../Components/Partials/Header';

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) =>
    (
    (isAuthenticated) ? (
        <Route {...rest} component={(props) => (
            <div id="wrapper" >

                <Header/>
                <Component {...props} />
            </div>
        )} />
    )
        : <Redirect to="/signin" />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.app.token
});

export default connect(mapStateToProps)(PrivateRoute);