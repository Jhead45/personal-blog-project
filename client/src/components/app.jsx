import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import List from './list';
import Home from './home';
import Read from './read';
import Write from './write';
import Edit from './edit';
import Delete from './delete';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import AuthButton from './auth/authButton';

class App extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <AuthButton />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/list" component={List} />
                        <PrivateRoute exact path="/write" component={Write} />
                        <Route exact path="/read/:id" component={Read} />
                        <PrivateRoute exact path="/edit/:id" component={Edit} />
                        <PrivateRoute exact path='/delete/:id' component={Delete} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App;