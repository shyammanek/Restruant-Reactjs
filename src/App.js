import ReastaurantList from "./components/ReastaurantList";
import ReastaurantCreate from "./components/ReastaurantCreate";
import ReastaurantDetails from "./components/ReastaurantDetails";
import ReastaurantSearch from "./components/ReastaurantSearch";
import Home from "./components/Home";
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'
import ReastaurantUpdate from "./components/ReastaurantUpdate";
import {Navbar, Nav} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";
import Logout from "./components/Logout";
import Protected from "./components/Protected";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                                <Nav.Link><Link to="/list">List</Link></Nav.Link>
                                <Nav.Link><Link to="/search">Search</Link></Nav.Link>
                                <Nav.Link><Link to="/create">Reastaurant Create</Link></Nav.Link>
                                {
                                    localStorage.getItem('login') ?
                                        <Nav.Link><Link to="/logout">Logout</Link></Nav.Link>
                                        :
                                        <Nav.Link><Link to="/login">Login</Link></Nav.Link>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                {/*<Route exact path="/">*/}
                {/*    <Home/>*/}
                {/*    <ReastaurantList/>*/}
                {/*</Route>*/}
                {/*<Route path='/list'>
                    <ReastaurantList/>
                </Route>

                <Route path='/create'>
                    <ReastaurantCreate/>
                </Route>

                <Route path='/details'>
                    <ReastaurantDetails/>
                </Route>

                <Route path='/update/:id'
                       render={props => (
                           <ReastaurantUpdate {...props}/>
                       )}>
                </Route>

                <Route path='/search'>
                    <ReastaurantSearch/>
                </Route>*/}

                <Route path='/login'
                       render={props => (
                           <Login {...props}/>
                       )}>
                </Route>
                <Route path='/logout'>
                    <Logout/>
                </Route>

                <Protected exact path="/list" component={ReastaurantList}/>
                <Protected exact path="/details" component={ReastaurantDetails}/>
                <Protected exact path="/search" component={ReastaurantSearch}/>
                <Protected exact path="/create" component={ReastaurantCreate}/>
                <Protected exact path="/" component={Home}/>
                <Protected exact path='/update/:id' component={ReastaurantUpdate}/>


            </Router>
        </div>
    );
}

export default App;
