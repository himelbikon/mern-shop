import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Row, Col } from "react-bootstrap"
import CarouselSlider from "../components/CarouselSlider"
import SomeProducts from "../components/SomeProducts"
import Loader from "../components/Loader"
import Message from "../components/Message"
// import SlickSlider from "../components/SlickSlider"
import {
  getLatestProducts,
  getPopularProducts,
} from "../actions/productActions"

import { getAllCategories } from "../actions/categoryActions"
import CategoryCard from "../components/CategoryCard"

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

  useEffect(() => {
    dispatch(getLatestProducts())
    dispatch(getPopularProducts())
    dispatch(getAllCategories())

    return () => {}
  }, [dispatch])

  return (
    <>
      {/* <CarouselSlider /> */}

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
        <Row className="justify-content-center">
          {allCategories.map((category) => (
            <Col md={2} key={category._id}>
              <CategoryCard category={category} />
            </Col>
          ))}
        </Row>
      ) : (
        <Message>Something has gone wrong during showing categories!</Message>
      )}

      {/* <SlickSlider /> */}
    </>
  )
}

export default HomeScreen
