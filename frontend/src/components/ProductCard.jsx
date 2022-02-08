import React from "react"
import { LinkContainer } from "react-router-bootstrap"
import { Card } from "react-bootstrap"

const ProductCard = () => {
  const linkStyle = { cursor: "pointer" }

  return (
    <Card className="my-2">
      <LinkContainer to="/shop/2323" style={linkStyle}>
        <Card.Img
          variant="top"
          src="http://via.placeholder.com/500x300"
          className="h-100"
        />
      </LinkContainer>
      <Card.Body>
        <LinkContainer to="/shop/2323" style={linkStyle}>
          <Card.Title>Card Title</Card.Title>
        </LinkContainer>
        <Card.Text>
          <div>Price: $458.99</div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
