import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    useHistory,
} from 'react-router-dom'
import ReastaurantList from "./ReastaurantList";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            Password: "",
        }
    }

    login(key) {
        fetch("http://localhost:3000/login?q=" + this.state.name).then((data) => {
            data.json().then((resp) => {
                console.warn("Resp", resp)
                if (resp.length > 0) {
                    localStorage.setItem('login', JSON.stringify(resp))
                     this.props.history.push('/list')
                    } else
                        {
                            alert("Please Check Username And Password")
                        }
                    })
                    })

                    }

                    render()
                        {
                            return (
                                <div>
                                    <Form>
                                        Enter Email <br/><input type="text" name="user"
                                                                onChange={(event) => this.setState({name: event.target.value})}/><br/><br/>
                                        Enter Passsword <br/><input type="password" name="password"
                                                                    onChange={(event) => this.setState({password: event.target.value})}/><br/>
                                        <br/><Button variant="primary" onClick={() => {
                                        this.login()
                                    }}>   Login</Button>
                                    </Form>
                                </div>
                            );
                        }
                    }

                    export default Login;