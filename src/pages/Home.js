import React, { Component } from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Promotion from '../components/Promotion';
import Socialfeed from '../components/Socialfeeds';
import Loader from '../utilities';
class Home extends Component {
  render() {
    return (
      <div>
        <Loader />
        <Header />
        <Hero />
        <Promotion />
        <Socialfeed />
      </div>
    )
  }
}
export default Home;