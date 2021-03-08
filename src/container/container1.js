import React, { Component } from 'react';
import Component1 from '../functional/component1';

import * as ACTION_TYPES from '../store/actions/action_types';
import * as ACTIONS from '../store/actions/actions';
import Auth from '../utils/auth';

import { connect } from 'react-redux';

class Container1 extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.auth.login()}> Login </button>
        <button onClick={() => console.log(this.props.stateprop1)}> Get State </button>
        <button onClick={() => this.props.action1()}> Dispatch Action 1 </button>
        <button onClick={() => this.props.action2()}> Dispatch Action 2 </button>
        <button onClick={() => this.props.actionCreator1()}> Dispatch Action Creator 1 </button>
        <button onClick={() => this.props.actionCreator2()}> Dispatch Action Creator 2 </button>
        <button onClick={() => this.props.actionCreator3("Hello World")}> Dispatch Action Creator 3 </button>
        {this.props.stateprop1
          ? <h1> {this.props.userText} </h1>
          : null
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    stateprop1: state.reducer1.stateprop1,
    userText: state.userReducer.user_text
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action1: () => dispatch(ACTIONS.SUCCESS),
    action2: () => dispatch(ACTIONS.FAILURE),
    actionCreator1: () => dispatch(ACTIONS.success()),
    actionCreator2: () => dispatch(ACTIONS.failure()),
    actionCreator3: (payload) => dispatch(ACTIONS.user_input(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container1);
