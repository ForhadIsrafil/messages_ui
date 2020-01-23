import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
const AuthRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    (isAuthenticated) ?
        <Redirect to={'/'} />
        :
        <Route {...rest} component={(props) => {
            return (
                <div>
                    <Component {...props} />
                </div>
            )
        }} />
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.app.token
})

export default connect(mapStateToProps)(AuthRoute);