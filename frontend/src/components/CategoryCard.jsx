import React from "react"
import { Card } from "react-bootstrap"

const CategoryCard = ({ category }) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={category.image}
        alt={category.image}
      ></Card.Img>

      <Card.Body className="text-center"> {category.name}</Card.Body>
    </Card>
  )
}

export default CategoryCard
