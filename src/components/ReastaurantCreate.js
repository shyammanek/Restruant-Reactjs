import React, {Component} from 'react';
import {Button} from "react-bootstrap";

class ReastaurantCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            price: null,
            rating: null,
            location: null,
        }
    }

    Create() {
        fetch("http://localhost:3000/restaurant", {
            method: "Post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                alert("Restruant Created",+resp)
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Reastaurant Create</h1>
                <input onChange={(event => {
                    this.setState({name: event.target.value})
                })} placeholder="Restruant Name"/><br/>

                <input onChange={(event => {
                    this.setState({price: event.target.value})
                })} placeholder="Price" /><br/>

                <input onChange={(event => {
                    this.setState({rating: event.target.value})
                })} placeholder="Restruant Rating"/><br/>

                <input onChange={(event => {
                    this.setState({location: event.target.value})
                })} placeholder="Restruant Location"/><br/>

                <Button onClick={() => {
                    this.Create()
                }} className="btn btn-primary"> Add Restruant</Button>
            </div>
        );
    }
}

export default ReastaurantCreate;