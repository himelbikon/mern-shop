import axios from "axios"

import {
  LATEST_PRODUCTS_REQUEST,
  LATEST_PRODUCTS_SUCCESS,
  LATEST_PRODUCTS_FAIL,
  MOST_VIEWED_PRODUCTS_REQUEST,
  MOST_VIEWED_PRODUCTS_SUCCESS,
  MOST_VIEWED_PRODUCTS_FAIL,
  SHOP_PRODUCTS_REQUEST,
  SHOP_PRODUCTS_SUCCESS,
  SHOP_PRODUCTS_FAIL,
  SHOP_PRODUCTS_RESET,
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

export const getMostViewedProducts = () => async (dispatch) => {
  try {
    dispatch({ type: MOST_VIEWED_PRODUCTS_REQUEST })

    const { data } = await axios.get(`/api/products/popular/views?limit=6`)

    dispatch({ type: MOST_VIEWED_PRODUCTS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: MOST_VIEWED_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getShopProducts =
  (type = NaN, keyword = NaN) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: SHOP_PRODUCTS_REQUEST })

      const {
        shopProducts: { page },
      } = getState()

      const { data } = await axios.get(
        `/api/products${type ? `/${type}/${keyword}` : ""}?limit=3&page=${page}`
      )

      dispatch({
        type: SHOP_PRODUCTS_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: SHOP_PRODUCTS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const resetAllProducts = () => (dispatch) => {
  dispatch({ type: SHOP_PRODUCTS_RESET })
  // dispatch({ type: MOST_VIEWED_PRODUCTS_RESET })
}
