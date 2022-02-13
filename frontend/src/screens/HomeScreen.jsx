import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import CarouselSlider from "../components/CarouselSlider"
import SomeProducts from "../components/SomeProducts"
// import SlickSlider from "../components/SlickSlider"
import {
  latestProductsAction,
  popularProductsAction,
} from "../actions/productActions"
import Loader from "../components/Loader"
import Message from "../components/Message"

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

  useEffect(() => {
    dispatch(latestProductsAction())
    dispatch(popularProductsAction())

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

      {/* <SlickSlider /> */}
    </>
  )
}

export default HomeScreen
