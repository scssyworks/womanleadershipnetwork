import React, { Component } from 'react'
import HeroImage from '../static/images/hero.jpg';
export default class Hero extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // if required
  }
  render() {
    let path = window.location.pathname.substr(1);
    return (
      <article className="mb-5">
        <img src={HeroImage} alt="hero image" width="100%" height="500" />
      </article>

    )
  }
}
