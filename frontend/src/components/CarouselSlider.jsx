import React from "react"
import { Link } from "react-router-dom"
import { Carousel } from "react-bootstrap"
import img1 from "../images/carousel/1.jpg"
import img2 from "../images/carousel/2.jpg"
import img3 from "../images/carousel/3.jpg"

const CarouselSlider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt={img1} />
          <Carousel.Caption>
            {/* <h3>First slide label</h3> */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            <Link className="btn btn-primary" to="/shop">
              Shop Now
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt={img2} />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3> */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            <Link className="btn btn-primary" to="/shop">
              Shop Now
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt={img3} />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3> */}
            {/* <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.{" "}
            </p> */}
            <Link className="btn btn-primary" to="/shop">
              Shop Now
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default CarouselSlider
