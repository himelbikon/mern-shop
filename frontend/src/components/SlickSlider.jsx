import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import SliderCard from "./SliderCard"

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div>
      {/* <h2> Single Item</h2> */}
      <Slider {...settings}>
        <div>
          <SliderCard />
        </div>
        <div>
          <SliderCard />
        </div>
        <div>
          <SliderCard />
        </div>
        <div>
          <SliderCard />
        </div>
        <div>
          <SliderCard />
        </div>
        <div>
          <SliderCard />
        </div>
      </Slider>
    </div>
  )
}

export default SlickSlider
