import React, {Component} from 'react';
import Table from 'react-bootstrap/Table'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import {faDollarSign, faPenSquare, faTrashRestore,faStar,faLocationArrow} from "@fortawesome/free-solid-svg-icons";

class ReastaurantList extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        }

    }
    componentDidMount() {
     this.getData()
    }
    getData(){
          fetch("http://localhost:3000/restaurant").then((response) => {
            response.json().then((result) => {
                console.warn(result)
                this.setState({list: result})
            })
        })
    }

    Delete(id) {
        fetch("https://my-json-server.typicode.com/shyammanek/restruant-api/restaurant/"+id,
            {
                method: "DELETE",
            }).then((result) => {
            result.json().then((resp) => {
                alert("Restruant Deleted")
                 this.getData()
            })
        })
    }

    render() {
        return (
            <div>
                <h1> ReastaurantList </h1>
                {
                    this.state.list ?
                        <div>
                            <Table className="container" striped bordered hover>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Rating</th>
                                    <th>location</th>
                                    <th>Operations</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.list.map((restlist, i) =>
                                        <tr>
                                            <td>  {restlist.id} </td>
                                            <td>  {restlist.name} </td>
                                            <td><FontAwesomeIcon icon={faDollarSign}/> {restlist.price} </td>
                                            <td>  {restlist.rating}  <FontAwesomeIcon icon={faStar} /> </td>
                                            <td>   <FontAwesomeIcon icon={faLocationArrow} />  {restlist.location}</td>
                                            <td>
                                                <span><Link to={"/update/" + restlist.id}> <FontAwesomeIcon
                                                    icon={faPenSquare}/>  </Link></span>
                                                <span onClick={() => this.Delete(restlist.id)}> <FontAwesomeIcon
                                                    icon={faTrashRestore}/></span>
                                            </td>
                                        </tr>)
                                }
                                </tbody>
                            </Table>
                        </div>
                        : <p>Please Wait...</p>
                }
            </div>
        );
    }
}

export default ReastaurantList;
