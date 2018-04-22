import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//Routes
import Main from '../Main-page/main'
import ProjectPage from '../Project-pages/index'


export default () =>
    (<Router>
        <div>
            <Route path="/" exact component={Main}/>
            <Route path="/projects" exact component={ProjectPage}/>
        </div>
    </Router>);