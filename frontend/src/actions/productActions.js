import axios from "axios"

import {
  LATEST_PRODUCTS_REQUEST,
  LATEST_PRODUCTS_SUCCESS,
  LATEST_PRODUCTS_FAIL,
  POPULAR_PRODUCTS_REQUEST,
  POPULAR_PRODUCTS_SUCCESS,
  POPULAR_PRODUCTS_FAIL,
} from "../constants/productConstants"

export const getLatestProducts = () => async (dispatch) => {
  try {
    dispatch({ type: LATEST_PRODUCTS_REQUEST })

    const { data } = await axios.get(`/api/products?limit=6`)

    dispatch({ type: LATEST_PRODUCTS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: LATEST_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getPopularProducts = () => async (dispatch) => {
  try {
    dispatch({ type: POPULAR_PRODUCTS_REQUEST })

    const { data } = await axios.get(`/api/products/popular?limit=6`)

    dispatch({ type: POPULAR_PRODUCTS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: POPULAR_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
