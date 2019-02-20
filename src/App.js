import React, { Component } from 'react';

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './App.css';

import './App.scss';

import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container-fluid">


          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Home} />
          <Route path="/blog" component={Home} />
          <Route path="/about" component={Home} />
          <Route path="/contact" component={Home} />
          <Route path="/cart" component={Home} />
          <Route path="/productdetail" component={Home} />


        </div >
      </Router>
    );
  }
}

export default App;
