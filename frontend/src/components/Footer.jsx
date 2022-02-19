import React from "react"
import { Link } from "react-router-dom"
import { Row, Col, Container } from "react-bootstrap"

const Footer = () => {
  return (
    <footer className="text-center border-top py-5 mt-5 bg-black text-white">
      <Container>
        <Row>
          <Col lg={4}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <h2 className="text-white">Mern Shop</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos corrupti facere aperiam, molestiae deleniti magnam
                vero iure mollitia quo soluta.
              </p>
            </Link>
          </Col>

          <Col lg={4}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <h2 className="text-white">Mern Shop</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos corrupti facere aperiam, molestiae deleniti magnam
                vero iure mollitia quo soluta.
              </p>
            </Link>
          </Col>

          <Col lg={4}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <h2 className="text-white">Mern Shop</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos corrupti facere aperiam, molestiae deleniti magnam
                vero iure mollitia quo soluta.
              </p>
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
