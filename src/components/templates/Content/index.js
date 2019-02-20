import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from '../Pages/Home';

const Content = () => (
    <div className="wwn-content">
        <Router>
            <div className="wwn-container">
                <Route exact path="/" component={Home} />
            </div>
        </Router>
    </div>
);

export default Content;