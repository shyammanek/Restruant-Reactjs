import React, {Component} from 'react';
import {
    Redirect,
    Route,
    Link,
} from 'react-router-dom'

const Protected = ({component: Cmp, ...rest}) => (
    <Route
        {...rest}
        render={(props) =>
            localStorage.getItem('login') ? (
                <Cmp {...props}/>
            ):
                <Redirect to="/login" />

        }
/>
)

export default Protected;