import React, {Component} from 'react';
import {Button} from "react-bootstrap";

class ReastaurantUpdate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            price: null,
            rating: null,
            location: null,
        }
    }


    componentDidMount() {
        fetch("http://localhost:3000/restaurant/"+this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                console.warn(result)
                this.setState({
                    name: result.name,
                    price: result.price,
                    id: result.id,
                    rating: result.rating,
                    location: result.location,

                })
            })
        })
    }

    Update() {
        fetch("http://localhost:3000/restaurant/" + this.state.id, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                alert("Restruant updated")
            })
        })
    }

    render() {
        console.warn(this.props.match.params.id);
        return (
            <div>
                <h1>ReastaurantUpdate</h1>
                <input onChange={(event) => {
                    this.setState({name: event.target.value})
                }} placeholder="Restruant Name" value={this.state.name}/><br/>

                <input onChange={(event) => {
                    this.setState({price: event.target.value})
                }} placeholder="Price" value={this.state.price}/><br/>

                <input onChange={(event) => {
                    this.setState({rating: event.target.value})
                }} placeholder="Restruant Rating" value={this.state.rating}/><br/>

                <input onChange={(event) => {
                    this.setState({location: event.target.value})
                }} placeholder="Restruant Location" value={this.state.location}/><br/>

                <Button onClick={() => {
                    this.Update()
                }} className="btn btn-primary"> Update Restruant</Button>
            </div>
        );
    }
}

export default ReastaurantUpdate;