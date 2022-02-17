import {
  SHOWCASE_PRODUCTS_FAIL,
  SHOWCASE_PRODUCTS_REQUEST,
  SHOWCASE_PRODUCTS_SUCCESS,
} from "../constants/showcaseConstants"

export const showcaseProductsReducers = (state = { products: [] }, action) => {
  switch (action.type) {
    case SHOWCASE_PRODUCTS_REQUEST:
      return { loading: true, products: [] }

    case SHOWCASE_PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload }

    case SHOWCASE_PRODUCTS_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
