import React, { Component } from "react";

import Component1 from "./functional/component1";
import Component2 from "./functional/component2";
import Component3 from "./functional/component3";

import Container1 from "./container/container1";
import Callback from "./functional/callback";
import Header from "./container/header";
import history from "./utils/history";
import AuthCheck from "./utils/authcheck";

import { Router, Route, Switch } from "react-router-dom";
import Auth from "./utils/auth";

// this auth object will be passed into container1 as a prop
const auth = new Auth();

const handleAuthentication = (props) => {
  if (props.location.hash) {
    auth.handleAuAth();
  }
};

class Routes extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route
                exact
                path="/"
                render={
                  // Auth object in login function is passed as a prop
                  () => <Container1 auth={auth} />
                }
              />
              <Route
                path="/authcheck"
                render={() => <AuthCheck auth={auth} />}
              />
              <Route
                path="/callback"
                render={(props) => {
                  // Handle auth and then render the Callback component when routing to /callback
                  handleAuthentication(props);
                  return <Callback />;
                }}
              />
              <Route
                path="/component/:name"
                render={(prop) => <Component1 {...prop} />}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Routes;
