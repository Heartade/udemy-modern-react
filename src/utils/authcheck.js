import React, { Component } from "react";
import history from "./history";
import * as ACTIONS from "../store/actions/actions";

import { connect } from 'react-redux';

class AuthCheck extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated()) {
      this.props.login_success();
      history.replace("/"); // return to home
    } else {
      this.props.login_failure();
      history.replace("/"); // return to home
    }
  }
  render() {
    return <div></div>;
  }
}

function mapStateToProps(state) {
  return {
    stateprop1: state.reducer1.stateprop1,
    userText: state.userReducer.user_text,
  };
}

// Provide dispatch methods as props
function mapDispatchToProps(dispatch) {
  return {
    login_success: (() => dispatch(ACTIONS.login_success())),
    login_failure: (() => dispatch(ACTIONS.login_failure())),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthCheck);
