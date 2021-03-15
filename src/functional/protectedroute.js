import React from "react";
import { withRouter } from "react-router-dom";

const ProtectedRoute = (props) => {
  console.log("???");
  if (props.auth) props.auth.getProfile();
  return (
    <div>
      Protected Page
      {
        JSON.stringify(props.auth.userProfile) // will need another route as getProfile works asyncly
      }
    </div>
  );
};

export default ProtectedRoute;
