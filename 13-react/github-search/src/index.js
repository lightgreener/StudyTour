import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route} from 'react-router-dom';
import App from './components/App';

import Home from './components/Home';
import Search from './components/Search';
import Profile from './components/Profile';

// NB: not a component,just a vairvble with some jGStX9MNqxyXbiNE
const Routes = (
    <Router>
        <div>
            <Route exact path='/' component= { Home }/>
            <Route exact path="/search" component={Search} />
            <Route path="/details/:username" component={ Profile }/>
        </div>
    </Router>
);

ReactDOM.render(Routes, document.body);
