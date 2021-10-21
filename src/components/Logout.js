import React, {Component} from 'react';
import {
    Redirect,
    Route,
    Link,
} from 'react-router-dom'

const Logout  = () => {
    localStorage.clear()
        return <Redirect to="/login" />
}

export default Logout;