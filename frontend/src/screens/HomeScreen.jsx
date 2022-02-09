import React from "react"
// import { Container } from "react-bootstrap"
import CarouselSlider from "../components/CarouselSlider"
import SomeProducts from "../components/SomeProducts"
// import SlickSlider from "../components/SlickSlider"

const HomeScreen = () => {
  const products = []
  const error = ""

  return (
    <>
      <CarouselSlider />

      <SomeProducts
        title="Latest Products"
        link="/shop"
        loader={true}
        error={error}
        products={products}
      />

      {/* <SlickSlider /> */}
    </>
  )
}

export default HomeScreen
