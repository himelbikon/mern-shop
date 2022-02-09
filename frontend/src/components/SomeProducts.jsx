import React from "react"
import { Link } from "react-router-dom"
import { Row, Col } from "react-bootstrap"
import ProductCard from "./ProductCard"
import Loader from "./Loader"

const SomeProducts = ({ title, link, loader, error }) => {
  return (
    <div className="my-5">
      <h1 className="text-center">{title}</h1>

      {loader ? (
        <Loader />
      ) : (
        <div>
          <Row>
            <Col lg={4} md={6}>
              <ProductCard />
            </Col>
            <Col lg={4} md={6}>
              <ProductCard />
            </Col>
            <Col lg={4} md={6}>
              <ProductCard />
            </Col>
            <Col lg={4} md={6}>
              <ProductCard />
            </Col>
            <Col lg={4} md={6}>
              <ProductCard />
            </Col>
            <Col lg={4} md={6}>
              <ProductCard />
            </Col>
          </Row>
          <div className="text-center my-3">
            <Link className="btn btn-primary" to={link}>
              Show More
            </Link>{" "}
          </div>
        </div>
      )}
    </div>
  )
}

export default SomeProducts
