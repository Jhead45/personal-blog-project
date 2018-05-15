import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import List from './list';
import Home from './home';
import Read from './read';
import Write from './write';
import Edit from './edit';
import Delete from './delete';
import Signup from './signup';
import ShowUser from './showUser';
import Welcome from './welcome';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import AuthButton from './auth/authButton';
import Donate from './donate';
import Contact from './contact';

class App extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <nav className="navbar navbar-dark bg-dark">
                    <AuthButton />
                        <Link className="btn btn-dark btn-lg mt-3 ml-2 text-white" to="/donate">Donate</Link>
                        <Link className="btn btn-dark btn-lg mt-3 ml-2 text-white" to="/contact">Contact Us</Link>
                    </nav>
                    {/* <div className='d-flex justify-content-center align-items-center'>
                        <AuthButton />
                        <Link className="btn btn-dark btn-lg mt-3 ml-2 text-white" to="/donate">Donate</Link>
                        <Link className="btn btn-dark btn-lg mt-3 ml-2 text-white" to="/contact">Contact Us</Link>
                    </div> */}
                    <ShowUser />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/list" component={List} />
                        <PrivateRoute exact path="/write" component={Write} />
                        <Route exact path="/read/:id" component={Read} />
                        <PrivateRoute exact path="/edit/:id" component={Edit} />
                        <PrivateRoute exact path='/delete/:id' component={Delete} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/welcome" component={Welcome} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/donate" component={Donate} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App;