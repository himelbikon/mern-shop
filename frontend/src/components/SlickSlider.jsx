import React from "react"
import { useSelector } from "react-redux"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import SliderCard from "./SliderCard"
import Loader from "../components/Loader"
import Message from "./Message"

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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

  const {
    products: latestProducts,
    error: latestProductsError,
    loading: latestProductsLoading,
  } = useSelector((state) => state.latestProducts)

  return (
    <>
      {latestProductsLoading ? (
        <Loader />
      ) : latestProductsError ? (
        <Message>{latestProductsError}</Message>
      ) : (
        <div>
          <h2 className="text-center">New Arivals</h2>
          <Slider {...settings}>
            {latestProducts.map((product) => (
              <div key={product._id}>
                <SliderCard product={product} />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>
  )
}

export default SlickSlider
