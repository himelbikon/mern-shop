import React from "react"
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"

const CategoryCard = ({ category }) => {
  return (
    <Card>
      <Link
        to={`/shop?category=${category.slug}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Card.Img
          variant="top"
          src={category.image}
          alt={category.image}
        ></Card.Img>

        <Card.Body className="text-center"> {category.name}</Card.Body>
      </Link>
    </Card>
  )
}

export default CategoryCard
