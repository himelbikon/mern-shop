import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Form, Button, Row, Col, Spinner } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useSearchParams } from "react-router-dom"
import { login } from "../actions/userActions"
import "../styles/loginStyle.scss"
import Message from "../components/Message"

const LoginScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [query] = useSearchParams()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { loading, error, userInfo } = useSelector((state) => state.userAuth)

  useEffect(() => {
    if (userInfo) {
      navigate(query.get("redirect") ? query.get("redirect") : "/")
    }

    return () => {}
  }, [userInfo, query, navigate])

  const formHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <Row className="justify-content-center">
      <Col lg={4}>
        <Form
          className="my-5 bg-white p-4 rounded border"
          onSubmit={formHandler}
        >
          <h3 className="mb-4 text-center">Login</h3>

          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
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

          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

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
            No account? <Link to="/register">Register</Link>
          </div>
        </Form>
      </Col>
    </Row>
  )
}

export default LoginScreen
