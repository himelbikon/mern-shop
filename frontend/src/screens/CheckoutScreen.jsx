import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Table, Button, Form, Row, Col, Spinner } from "react-bootstrap"
import Message from "../components/Message"
import { createOrder } from "../actions/orderActions"

const CheckoutScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { userInfo } = useSelector((state) => state.userAuth)
  const { cartItems } = useSelector((state) => state.cart)
  const { loading, error, success } = useSelector((state) => state.createOrder)

  const linkStyle = { textDecoration: "none", color: "inherit" }

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [postalCode, setPostalCode] = useState("")
  // const [uniqueId, setUniqueId] = useState("")
  const [paymentMethod] = useState("PayPal")

  useEffect(() => {
    if (!userInfo) {
      navigate(`/login?redirect=/checkout`)
    }

    if (success) {
      navigate(`/orders`)
    }

    return () => {}
  }, [userInfo, navigate, success])

  const cartTotalPrice = () => {
    return cartItems.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    )
  }

  const orderHandler = (e) => {
    e.preventDefault()
    const order = {
      shippingAddress: { name, email, phone, address, city, postalCode },
      paymentMethod,
      totalPrice: cartItems.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
      ),
      orderItems: cartItems,
    }
    dispatch(createOrder(order))
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

          <Form onSubmit={orderHandler}>
            <Row className="my-5">
              <h3>Shipping Details</h3>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  // controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter phone number"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter address"
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter city name"
                    required
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter postal code"
                    required
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </Form.Group>
              </Col>

              <Col>
                {error && <Message>{error}</Message>}
                <Button type="submit" className="w-100" disabled={loading}>
                  {loading ? (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  ) : (
                    "Place Order"
                  )}
                </Button>
              </Col>
            </Row>
          </Form>
        </>
      ) : (
        <Message variant="info">No products in cart!</Message>
      )}
    </>
  )
}

export default CheckoutScreen
