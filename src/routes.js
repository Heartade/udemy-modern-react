import React, { Component } from "react";

import { connect } from 'react-redux';
import * as ACTIONS from "./store/actions/actions";

import Component1 from "./functional/component1";

import Container1 from "./container/container1";
import Profile from "./container/profile";
import Callback from "./functional/callback";
import Header from "./container/header";
import history from "./utils/history";
import AuthCheck from "./utils/authcheck";

import { Router, Route, Switch, Redirect } from "react-router-dom";
import Auth from "./utils/auth";
import UnauthRedirect from "./functional/unauthredirect";
import ProtectedRoute from "./functional/protectedroute";

// this auth object will be passed into container1 as a prop
const auth = new Auth();

const handleAuthentication = (props) => {
  if (props.location.hash) {
    auth.handleAuth();
  }
};

const PrivateRoute = ({component: Component, auth}) => (
  <Route render = {props=>auth.isAuthenticated() === true
  ? <Component auth={auth} {...props}/>
  : <Redirect to={{pathname:'/redirect'}}/>
  }/>
)
class Routes extends Component {
  componentDidMount() { // Run auth check before render()
    if (auth.isAuthenticated()) {
      this.props.login_success();
      auth.getProfile();
      setTimeout(()=>{
        this.props.add_profile(auth.userProfile);
      }, 2000);
    } else {
      this.props.login_failure();
      this.props.remove_profile();
    }
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Header auth={auth}/>
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
              <Route path='/redirect' component={UnauthRedirect}/>
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
              <PrivateRoute path='/profile' auth={auth} component={Profile}/>
              <PrivateRoute path="/privateroute" auth={auth} component={ProtectedRoute}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps() {return {}}
// Provide dispatch methods as props
function mapDispatchToProps(dispatch) {
  return {
    login_success: (() => dispatch(ACTIONS.login_success())),
    login_failure: (() => dispatch(ACTIONS.login_failure())),
    add_profile: ((profile)=>dispatch(ACTIONS.add_profile(profile))),
    remove_profile: (()=>dispatch(ACTIONS.remove_profile()))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
