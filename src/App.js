import React, { Component } from 'react';
import logo from './logo.svg';
import '../node_modules/materialize-css/dist/css/materialize.css';
import '../node_modules/materialize-css/dist/js/materialize';
import '../node_modules/font-awesome/css/font-awesome.css'
import './App.css';
import Main from './Main-page/main';

class App extends Component {

  render() {
    return (
        <div>
            <Main/>
        </div>
    );
  }
}

export default App;
