import {
  LATEST_PRODUCTS_REQUEST,
  LATEST_PRODUCTS_SUCCESS,
  LATEST_PRODUCTS_FAIL,
  POPULAR_PRODUCTS_REQUEST,
  POPULAR_PRODUCTS_SUCCESS,
  POPULAR_PRODUCTS_FAIL,
} from "../constants/productConstants"

export const latestProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case LATEST_PRODUCTS_REQUEST:
      return { loading: true, products: [] }

    case LATEST_PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload }

    case LATEST_PRODUCTS_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const popularProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case POPULAR_PRODUCTS_REQUEST:
      return { loading: true, products: [] }

    case POPULAR_PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload }

    case POPULAR_PRODUCTS_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
