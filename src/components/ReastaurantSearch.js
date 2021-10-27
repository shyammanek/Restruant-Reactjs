import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDollarSign, faPenSquare, faTrashRestore} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import Table from 'react-bootstrap/Table'

class ReastaurantSearch extends Component {
    constructor() {
        super();
        this.state = {
            searchData: null,
            noData: false,
            lastSearch: "",
        }

    }

    search(key) {
        this.setState({lastSearch: key})
        fetch("https://my-json-server.typicode.com/shyammanek/restruant-api/restaurant?q=" + key).then((data) => {
            data.json().then((resp) => {
                console.warn("Resp", resp)
                if (resp.length > 0) {
                    this.setState({searchData: resp, noData: false})

                } else {
                    this.setState({noData: true, searchData: null})
                }
            })
        })

    }

    componentDidMount() {
        this.getData()
    }

    getData() {
        fetch("https://my-json-server.typicode.com/shyammanek/restruant-api/restaurant").then((response) => {
            response.json().then((result) => {
                console.warn(result)
                this.setState({list: result})
            })
        })
    }

    Delete(id) {
        fetch("https://my-json-server.typicode.com/shyammanek/restruant-api/restaurant/" + id,
            {
                method: "DELETE",
            }).then((result) => {
            result.json().then((resp) => {
                alert("Restruant Deleted")
                this.search(this.state.lastSearch)
            })
        })
    }


    render() {
        return (
            <div>
                <h1>ReastaurantSearch</h1>
                <input type="text" onChange={(event) => this.search(event.target.value)}/>
                <div>
                    {
                        this.state.searchData ?
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
                                        this.state.searchData.map((restlist) =>
                                            <tr>
                                                <td>  {restlist.id} </td>
                                                <td>  {restlist.name} </td>
                                                <td><FontAwesomeIcon icon={faDollarSign}/> {restlist.price} </td>
                                                <td>  {restlist.rating} </td>
                                                <td>  {restlist.location} </td>
                                                <td>
                                                <span><Link to={"/update/" + restlist.id}> <FontAwesomeIcon
                                                    icon={faPenSquare}/>  </Link></span>
                                                    <span onClick={() => this.Delete(restlist.id)}> <FontAwesomeIcon
                                                        icon={faTrashRestore}/></span>
                                                </td>
                                            </tr>
                                        )
                                    }
                                    </tbody>
                                </Table>
                            </div>
                            : ""
                    }
                    {
                        this.state.noData ? <h3>No Data Found....</h3> : null
                    }
                </div>
            </div>
        );
    }
}

export default ReastaurantSearch;
