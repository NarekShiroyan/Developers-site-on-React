import React, { Component } from 'react';
import './main.css';
import Header from './Header/header-main';
import Body from './Body/body-main';
import Footer from './Footer/footer-main';

class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
    }
}

export default Main;
