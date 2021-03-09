import React, { Component } from 'react';

class AuthCheck extends Component {
  render() {
    return (
      <div>

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

export default connect(mapStateToProps, mapDispatchToProps)(AuthCheck);
