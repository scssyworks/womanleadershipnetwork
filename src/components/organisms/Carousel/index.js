import React, { Component } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings} className="mb-5" style={{ color: '#333' }}>
        <div><img src="http://placekitten.com/g/400/200" /></div>
        <div><img src="http://placekitten.com/g/400/200" /></div>
        <div><img src="http://placekitten.com/g/400/200" /></div>
        <div><img src="http://placekitten.com/g/400/200" /></div>
        <div><img src="http://placekitten.com/g/400/200" /></div>
        <div><img src="http://placekitten.com/g/400/200" /></div>
      </Slider>
    );
  }
}

export default Carousel;