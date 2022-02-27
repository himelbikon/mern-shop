import React, { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { Row, Col, ListGroup, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { LinkContainer } from "react-router-bootstrap"
import { resetAllProducts, getShopProducts } from "../actions/productActions"
import { getAllCategories } from "../actions/categoryActions"
import Loader from "../components/Loader"
import Message from "../components/Message"
import ProductCard from "../components/ProductCard"

const ShopScreen = () => {
  const dispatch = useDispatch()
  const [params] = useSearchParams()

  const linkStyle = {
    textDecoration: "none",
    cursor: "pointer",
  }

  const { products, loading, error } = useSelector(
    (state) => state.shopProducts
  )

  const { categories } = useSelector((state) => state.allCategories)

  useEffect(() => {
    dispatch(getAllCategories())

    if (params.get("popular")) {
      dispatch(getShopProducts("popular", params.get("popular")))
    } else if (params.get("category")) {
      dispatch(getShopProducts("category", params.get("category")))
    } else {
      dispatch(getShopProducts())
    }

    return () => {
      dispatch(resetAllProducts())
    }
  }, [dispatch, params])

  const productsHandler = () => {
    if (params.get("popular")) {
      dispatch(getShopProducts("popular", params.get("popular")))
    } else if (params.get("category")) {
      dispatch(getShopProducts("category", params.get("category")))
    } else {
      dispatch(getShopProducts())
    }
  }

  return (
    <section>
      <Row>
        <Col lg={9}>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message>{error}</Message>
          ) : (
            <Row>
              {products.map((product) => (
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
          <div className="my-2">
            <ListGroup>
              <ListGroup.Item className="text-center text-white bg-dark">
                Oder by
              </ListGroup.Item>
              <LinkContainer to={`/shop?popular=latest`} style={linkStyle}>
                <ListGroup.Item>Latest</ListGroup.Item>
              </LinkContainer>
              <LinkContainer to={`/shop?popular=views`} style={linkStyle}>
                <ListGroup.Item>Most Views</ListGroup.Item>
              </LinkContainer>
            </ListGroup>
          </div>

          <div className="my-2">
            <ListGroup>
              <ListGroup.Item className="text-center text-white bg-dark">
                Categories
              </ListGroup.Item>

              {categories.map((category) => (
                <LinkContainer
                  to={`/shop?category=${category.slug}`}
                  key={category._id}
                  style={linkStyle}
                >
                  <ListGroup.Item>{category.name}</ListGroup.Item>
                </LinkContainer>
              ))}
            </ListGroup>
          </div>
        </Col>
      </Row>{" "}
    </section>
  )
}

export default ShopScreen
