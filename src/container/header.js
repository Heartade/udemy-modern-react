import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    state = {
        pages: [
            {
                id: 0,
                name: "About"
            },
            {
                id: 1,
                name: "Portfolio"
            },
            {
                id: 2,
                name: "Contacts"
            }
        ]
    }
    render() {
        return (
            <div>
                <Link to = '/' style={{padding: "5px"}}>
                    Home
                </Link>
                <Link to = '/privateroute' style={{padding: "5px"}}>
                    Authorized Access
                </Link>
                {
                    !this.props.is_authenticated
                    ? <button onClick={()=>this.props.auth.login()}>Login</button>
                    : <button onClick={()=>this.props.auth.logout()}>Logout</button>
                }
                {this.state.pages.map(page=>(
                    <Link key = {page.id} to = {'/component/'+page.name} style={{padding: "5px"}}>
                        {page.name}
                    </Link>
                ))}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        is_authenticated: state.auth_reducer.is_authenticated
    }
}

export default connect(mapStateToProps)(Header);

