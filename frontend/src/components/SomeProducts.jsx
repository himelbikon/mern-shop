import React from "react"
import { Row, Col } from "react-bootstrap"
import ProductCard from "./ProductCard"

const SomeProducts = ({ title }) => {
  return (
    <div className="my-5">
      <h1 className="text-center">{title}</h1>
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
    </div>
  )
}

export default SomeProducts
