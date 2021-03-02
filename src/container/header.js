import React, { Component } from 'react';
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
                {this.state.pages.map(page=>(
                    <Link key = {page.id} to = {'/component/'+page.name} style={{padding: "5px"}}>
                        {page.name}
                    </Link>
                ))}
            </div>
        )
    }
}

export default Header;

