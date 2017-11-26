import React, { Component } from 'react';
import Todos from './Todos';
import Toggler from './Toggler';
import Home from './Home';

import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom'

class Navbar extends Component {

    render() {
        return (
            <Router>
                <div>

                    <div className="container-fluid">
                        <nav class="navbar navbar-default">
                            <div class="container-fluid">
                                <div class="navbar-header">
                                    <a class="navbar-brand">React App</a>
                                </div>

                                <ul class="nav navbar-nav">
                                    <li><NavLink to="/toggler" activeClassName="active">Toggler</NavLink></li>
                                    <li><NavLink to="/todos" activeClassName="active">Todos</NavLink></li>
                                </ul>
                            </div>
                        </nav>

                        <Route exact path="/toggler" component={Toggler} />
                        <Route exact path="/todos" component={Todos} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default Navbar;
