import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Row, Col, Button, Image, Form } from "react-bootstrap"
import Loader from "../components/Loader"
import Message from "../components/Message"
import { getSingleProduct } from "../actions/productActions"
import { SINGLE_PRODUCT_RESET } from "../constants/productConstants"
import { addToCart, deleteFromCart } from "../actions/cartActions"

const ProductScreen = () => {
  const dispatch = useDispatch()
  const params = useParams()

  const [qty, setQty] = useState(1)

  const { product, loading, error } = useSelector(
    (state) => state.singleProduct
  )

  const { cartItems } = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(getSingleProduct(params.id))

    return () => {
      dispatch({ type: SINGLE_PRODUCT_RESET })
    }
  }, [dispatch, params])

  const cartAddHandler = () => {
    dispatch(addToCart(product, qty))
  }

  const cartDeleteHandler = () => {
    dispatch(deleteFromCart(product._id))
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <>
          <Row>
            <Col lg={6} className="my-2">
              {" "}
              <Image
                fluid
                className="w-100"
                src={product.image}
                alt={product.image}
              />
            </Col>{" "}
            <Col lg={6} className="my-2">
              <h3>{product.name}</h3>
              <div className="my-4">
                <div>Views: {product.views}</div>
                <div>Price: ${product.price}</div>
              </div>

              <Row className="my-5">
                <Col xs={6}>
                  <Form.Control
                    as="select"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    disabled={product.countInStock <= 0}
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </Form.Control>
                </Col>

                <Col xs={6}>
                  <Button
                    variant="dark"
                    onClick={cartAddHandler}
                    disabled={product.countInStock <= 0}
                  >
                    Add to Cart
                  </Button>
                </Col>

                <Col xs={12} className="my-2">
                  {product.countInStock <= 0 && (
                    <Message variant="info">Out of stock!</Message>
                  )}

                  {cartItems.find(
                    (item) => item.product._id === product._id
                  ) && (
                    <Row className="justify-content-between">
                      <Col className="my-2">Product already in cart!</Col>
                      <Col>
                        <Button variant="danger" onClick={cartDeleteHandler}>
                          Delete From Cart
                        </Button>
                      </Col>
                    </Row>
                  )}
                </Col>
              </Row>
            </Col>
          </Row>

          <div className="my-5">
            <h2 className="text-center">Product Description</h2>
            <div>{product.description}</div>
          </div>
        </>
      )}
    </>
  )
}

export default ProductScreen
