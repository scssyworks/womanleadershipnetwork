
import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './main/base.scss';
import Header from './components/organisms/Header/Header';
import Body from './components/templates/Body/Body';
import Footer from './components/organisms/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="wwn-app">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
