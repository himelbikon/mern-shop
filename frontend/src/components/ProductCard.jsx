import React from "react"
import { LinkContainer } from "react-router-bootstrap"
import { Card } from "react-bootstrap"

const ProductCard = ({ product }) => {
  const linkStyle = { cursor: "pointer" }
  const imgPath = product.image
    ? product.image
    : "http://via.placeholder.com/500x300"

  return (
    <Card className="my-2">
      <LinkContainer to={`/shop/${product._id}`} style={linkStyle}>
        <Card.Img variant="top" src={imgPath} alt={imgPath} className="h-100" />
      </LinkContainer>
      <Card.Body>
        <LinkContainer to={`/shop/${product._id}`} style={linkStyle}>
          <Card.Title>{product.name}</Card.Title>
        </LinkContainer>
        <Card.Text as="div">
          <div>Price: $458.99</div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
