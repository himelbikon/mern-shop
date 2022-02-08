import React from "react"
import { Card } from "react-bootstrap"

const SliderCard = () => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src="http://via.placeholder.com/500x300" />
        <Card.Body className="text-center">
          <Card.Title>Card Title</Card.Title>
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
