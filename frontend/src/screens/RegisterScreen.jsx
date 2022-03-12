import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Form, Button, Row, Col, Spinner } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useSearchParams } from "react-router-dom"
import { register } from "../actions/userActions"
import Message from "../components/Message"

const RegisterScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [query] = useSearchParams()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const { userInfo } = useSelector((state) => state.userAuth)

  const { loading, error } = useSelector((state) => state.userRegister)

  useEffect(() => {
    if (userInfo) {
      navigate(query.get("redirect") ? query.get("redirect") : "/")
    }

    return () => {}
  }, [userInfo, query, navigate])

  const formHandler = (e) => {
    e.preventDefault()
    dispatch(register(name, email, password, confirmPassword))
  }

  return (
    <Row className="justify-content-center">
      <Col lg={4}>
        <Form
          className="my-5 bg-white p-4 rounded border"
          onSubmit={formHandler}
        >
          <h3 className="mb-4 text-center">Register</h3>

          <Form.Group className="mb-4" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          {error && <Message>{error}</Message>}

          <Button
            className="w-100 mt-2"
            variant="primary"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              "Submit"
            )}
          </Button>

          <div className="mt-4 text-center">
            Already has a account? <Link to="/login">Login</Link>
          </div>
        </Form>
      </Col>
    </Row>
  )
}

export default RegisterScreen
