import React, { Component } from 'react';
import './header-main-style.css';

class header extends Component {
    render() {

        return (
            <div className="row">
                <nav>
                    <div className="nav-wrapper">
                        <a href="" className="brand-logo">Logo</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="">Sass</a></li>
                            <li><a href="">Components</a></li>
                            <li><a href="">JavaScript</a></li>
                        </ul>
                    </div>
                </nav>

            </div>
        );
    }
}

export default header;