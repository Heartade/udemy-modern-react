import React from 'react'
import { withRouter } from 'react-router-dom';

const Component1 = props => {
  return (
    <div>
      <h1>{props.match.params.name}</h1>
      <br/>
      Content
    </div>
  );
}

export default withRouter(Component1);
