import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Table, Button, Form, Row, Col } from "react-bootstrap"
import Message from "../components/Message"

const CheckoutScreen = () => {
  const navigate = useNavigate()

  const { userInfo } = useSelector((state) => state.userAuth)
  const { cartItems } = useSelector((state) => state.cart)

  const linkStyle = { textDecoration: "none", color: "inherit" }

  useEffect(() => {
    if (!userInfo) {
      navigate(`/login?redirect=/checkout`)
    }

    return () => {}
  }, [userInfo, navigate])

  const cartTotalPrice = () => {
    return cartItems.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    )
  }

  return (
    <>
      {cartItems.length ? (
        <>
          <Table hover className="my-2">
            <thead>
              <tr>
                <th>Product</th>
                <th>Sub Total</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.product._id}>
                  <td>
                    <Link to={`/shop/${item.product._id}`} style={linkStyle}>
                      {item.product.name}
                    </Link>
                  </td>
                  <td>${item.product.price * item.quantity}</td>
                  <td>{item.product.countInStock}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Message variant="info">Total Price: ${cartTotalPrice()}</Message>

          <Row className="my-5">
            <h3>Shipping Details</h3>
            <Col md={6}>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
              </Form>
            </Col>

            <Col md={6}>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
              </Form>
            </Col>

            <Col md={6}>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter phone number" />
                </Form.Group>
              </Form>
            </Col>

            <Col md={6}>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter address" />
                </Form.Group>
              </Form>
            </Col>

            <Col md={6}>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="Enter city name" />
                </Form.Group>
              </Form>
            </Col>

            <Col md={6}>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control type="text" placeholder="Enter postal code" />
                </Form.Group>
              </Form>
            </Col>

            <Col>
              <Button className="w-100">Place Order</Button>
            </Col>
          </Row>
        </>
      ) : (
        <Message variant="info">No products in cart!</Message>
      )}
    </>
  )
}

export default CheckoutScreen
