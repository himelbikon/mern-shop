import {
  LATEST_PRODUCTS_REQUEST,
  LATEST_PRODUCTS_SUCCESS,
  LATEST_PRODUCTS_FAIL,
  POPULAR_PRODUCTS_REQUEST,
  POPULAR_PRODUCTS_SUCCESS,
  POPULAR_PRODUCTS_FAIL,
  ORDER_BY_PRODUCTS_REQUEST,
  ORDER_BY_PRODUCTS_SUCCESS,
  ORDER_BY_PRODUCTS_FAIL,
  ORDER_BY_PRODUCTS_RESET,
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

export const orderByProductsReducer = (
  state = { products: [], page: 1 },
  action
) => {
  switch (action.type) {
    case ORDER_BY_PRODUCTS_REQUEST:
      return { loading: true, ...state }

    case ORDER_BY_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: [...state.products, ...action.payload],
        page: state.page + 1,
      }

    case ORDER_BY_PRODUCTS_FAIL:
      return { loading: false, error: action.payload }

    case ORDER_BY_PRODUCTS_RESET:
      return { products: [], page: 1 }

    default:
      return state
  }
}
