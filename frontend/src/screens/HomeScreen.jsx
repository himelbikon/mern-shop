import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { Row, Col, Image } from "react-bootstrap"
import CarouselSlider from "../components/CarouselSlider"
import SomeProducts from "../components/SomeProducts"
import Loader from "../components/Loader"
import Message from "../components/Message"
import CategoryCard from "../components/CategoryCard"
import SlickSlider from "../components/SlickSlider"
import {
  getLatestProducts,
  getPopularProducts,
} from "../actions/productActions"

import { getAllCategories } from "../actions/categoryActions"
import { getShowcaseProducts } from "../actions/showcaseActions"

const HomeScreen = () => {
  const dispatch = useDispatch()

  const {
    products: latestProducts,
    error: latestProductsError,
    loading: latestProductsLoading,
  } = useSelector((state) => state.latestProducts)

  const {
    products: popularProducts,
    error: popularProductsError,
    loading: popularProductsLoading,
  } = useSelector((state) => state.popularProducts)

  const {
    categories: allCategories,
    error: allCategoriesError,
    loading: allCategoriesLoading,
  } = useSelector((state) => state.allCategories)

  const {
    products: showcaseProducts,
    error: showcaseProductsError,
    loading: showcaseProductsLoading,
  } = useSelector((state) => state.showcaseProducts)

  useEffect(() => {
    dispatch(getLatestProducts())
    dispatch(getPopularProducts())
    dispatch(getAllCategories())
    dispatch(getShowcaseProducts())

    return () => {}
  }, [dispatch])

  return (
    <>
      <CarouselSlider />

      {latestProductsLoading ? (
        <Loader />
      ) : latestProductsError ? (
        <Message>{latestProductsError}</Message>
      ) : (
        <SomeProducts
          title="Latest Products"
          link="/shop"
          products={latestProducts}
        />
      )}

      {popularProductsLoading ? (
        <Loader />
      ) : popularProductsError ? (
        <Message>{popularProductsError}</Message>
      ) : (
        <SomeProducts
          title="Popular Products"
          link="/shop?popular"
          products={popularProducts}
        />
      )}

      {allCategoriesLoading ? (
        <Loader />
      ) : allCategoriesError ? (
        <Message>{allCategoriesError}</Message>
      ) : allCategories ? (
        <div>
          <h1 className="text-center">Categories</h1>
          <Row className="justify-content-center">
            {allCategories.map((category) => (
              <Col md={2} key={category._id}>
                <CategoryCard category={category} />
              </Col>
            ))}
          </Row>
        </div>
      ) : (
        <Message>Something has gone wrong during showing categories!</Message>
      )}

      {showcaseProductsLoading ? (
        <Loader />
      ) : showcaseProductsError ? (
        <Message>{showcaseProductsError}</Message>
      ) : (
        showcaseProducts.map((showcase) => (
          <section
            key={showcase._id}
            className="my-3 p-3 rounded bg-light"
            // style={{ background: "#344CB7" }}
          >
            <Row>
              <Col lg={6}>
                <Image
                  fluid
                  src={showcase.product.image}
                  alt={showcase.product.image}
                />
              </Col>
              <Col lg={6}>
                <h3>{showcase.product.name}</h3>
                <p>{showcase.product.description.substring(0, 300)}</p>
                <div>
                  <Link
                    to={`/shop/${showcase.product._id}`}
                    className="btn btn-primary"
                  >
                    Show More
                  </Link>
                </div>
              </Col>
            </Row>
          </section>
        ))
      )}

      <section className="my-5">
        <SlickSlider />
      </section>
    </>
  )
}

export default HomeScreen
