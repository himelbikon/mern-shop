import React from "react"
import { Card } from "react-bootstrap"

const SliderCard = ({ product }) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.image} />
        <Card.Body className="text-center">
          <Card.Title>{product.name}</Card.Title>
          {/* <Card.Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis unde
            illum doloremque nesciunt quas ad deleniti voluptas quaerat
            provident hic?
          </Card.Text> */}
        </Card.Body>
      </Card>
    </>
  )
}

export default SliderCard
