import React, { Component } from 'react'
import Hero from '../../organisms/Hero';
import Promotion from '../../organisms/Promotion';
import Socialfeed from '../../organisms/Socialfeeds';
import Loader from '../../../utilities';
import Carousel from '../../organisms/Carousel';
class Home extends Component {
  render() {
    return (
      <div>
        <Loader />
        <Hero />
        <Promotion />
        <Carousel />
        <Socialfeed />
      </div>
    )
  }
}
export default Home;