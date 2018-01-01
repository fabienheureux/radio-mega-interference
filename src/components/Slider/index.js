import React, { Component } from 'react'
import SliderComponent from 'react-slick'

const context = require.context('./pictures', true, /\.jpg$/)
const pictures = []
context.keys().forEach(key => pictures.push(context(key)))

class Slider extends Component {
  render() {
		const settings = {
		  // adaptiveHeight: true,
    	dots: false,
    	infinite: true,
    	speed: 500,
    	slidesToShow: 1,
    	slidesToScroll: 1
  	}

		return (
      <SliderComponent {...settings}>
        {pictures.map(picture =>
          <div key={picture}>
            <img key={picture} src={picture} />
          </div>
        )}
      </SliderComponent>
    )
  }
}

export default Slider
