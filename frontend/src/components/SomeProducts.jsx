import React from "react"
import { Link } from "react-router-dom"
import { Row, Col } from "react-bootstrap"
import ProductCard from "./ProductCard"

const SomeProducts = ({ title, link, products }) => {
  return (
    <div className="my-5">
      <h1 className="text-center">{title}</h1>

      <div>
        <Row>
          {products.map((product) => (
            <Col lg={4} md={6} key={product._id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
        <div className="text-center my-3">
          <Link className="btn btn-primary" to={link}>
            Show More
          </Link>{" "}
        </div>
      </div>
    </div>
  )
}

export default SomeProducts
