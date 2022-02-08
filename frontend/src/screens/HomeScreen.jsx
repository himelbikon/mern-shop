import React from "react"
// import { Container } from "react-bootstrap"
import CarouselSlider from "../components/CarouselSlider"
import SomeProducts from "../components/SomeProducts"
// import SlickSlider from "../components/SlickSlider"

const HomeScreen = () => {
  return (
    <>
      <CarouselSlider />

      <SomeProducts title="Latest Products" />

      {/* <SlickSlider /> */}
    </>
  )
}

export default HomeScreen
