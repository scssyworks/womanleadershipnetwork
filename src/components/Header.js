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
      <header >
        <h1>Wonder Women Network</h1>
        <hr />
      </header>

    )
  }
}
