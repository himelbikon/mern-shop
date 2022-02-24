import React, { useEffect } from "react"
import { Row, Col, ListGroup, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { LinkContainer } from "react-router-bootstrap"
import {
  getOrderByProducts,
  resetShopProducts,
} from "../actions/productActions"
import Loader from "../components/Loader"
import Message from "../components/Message"
import ProductCard from "../components/ProductCard"

const ShopScreen = () => {
  const dispatch = useDispatch()

  const linkStyle = {
    textDecoration: "none",
    cursor: "pointer",
  }

  const {
    loading: orderByLoading,
    products: orderByProducts,
    error: orderByError,
  } = useSelector((state) => state.orderByProducts)

  useEffect(() => {
    dispatch(getOrderByProducts())

    return () => {
      dispatch(resetShopProducts())
    }
  }, [dispatch])

  const productsHandler = () => {
    dispatch(getOrderByProducts())
  }

  return (
    <section>
      <Row>
        <Col lg={9}>
          {orderByLoading ? (
            <Loader />
          ) : orderByError ? (
            <Message>{orderByError}</Message>
          ) : (
            <Row>
              {orderByProducts.map((product) => (
                <Col md={6} lg={4} key={product._id}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          )}

          <div className="text-center">
            <Button variant="primary" onClick={productsHandler}>
              Show More
            </Button>
          </div>
        </Col>

        <Col lg={3}>
          <ListGroup className="my-2">
            <ListGroup.Item className="text-center text-white bg-dark">
              Oder by
            </ListGroup.Item>
            <LinkContainer to={`/shop?order-by=latest`} style={linkStyle}>
              <ListGroup.Item>Latest</ListGroup.Item>
            </LinkContainer>
            <LinkContainer to={`/shop?order-by=popular`} style={linkStyle}>
              <ListGroup.Item>Popular</ListGroup.Item>
            </LinkContainer>
          </ListGroup>
        </Col>
      </Row>{" "}
    </section>
  )
}

export default ShopScreen
