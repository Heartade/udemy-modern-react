import React, {Component} from 'react';

import Component1 from './functional/component1';
import Component2 from './functional/component2';
import Component3 from './functional/component3';

import Container1 from './container/container1';
import Header from './container/header';
import history from './utils/history';

import { Router, Route, Switch } from 'react-router-dom';

class Routes extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Container1}/>
                        <Route path="/component/:name" render={(prop)=><Component1 {...prop}/>}/>
                    </Switch>

                </div>

                </Router>
            </div>
        )
    }
}

export default Routes;

