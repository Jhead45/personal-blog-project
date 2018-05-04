import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import List from './list';
import Home from './home';
import Read from './read';
import Write from './write';
import Edit from './edit';

class App extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/list" component={List} />
                        <Route exact path="/write" component={Write} />
                        <Route exact path="/read/:id" component={Read} />
                        <Route exact path="/edit/:id" component={Edit} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App;