import React, { Component } from "react";

import { connect } from "react-redux";

class Profile extends Component {
    renderProfile = (props) => {
        console.log(props);
        return (
            <div>
                <h1>{props.profile.nickname}</h1>
                <br />
                <img src={props.profile.picture} alt="Profile"/>
                <br />
                <h4> {props.profile.email}</h4>
                <br />
                <h4> {props.profile.name}</h4>
                <br />
                <h4> Verification Status: {props.profile.email_verified ? "Yes" : "No"}</h4>
                <br />
            </div>
        );
    };
    render() {
        console.log(this.props)
        return (
            <div>
                <this.renderProfile profile={this.props.userProfile.profile} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userProfile: state.authReducer.profile,
    };
}

export default connect(mapStateToProps)(Profile);
