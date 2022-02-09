import {
  LATEST_PRODUCTS_REQUEST,
  LATEST_PRODUCTS_SUCCESS,
  LATEST_PRODUCTS_FAIL,
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
