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
  SINGLE_PRODUCT_REQUEST,
  SINGLE_PRODUCT_SUCCESS,
  SINGLE_PRODUCT_FAIL,
  SINGLE_PRODUCT_RESET,
} from "../constants/productConstants"

export const latestProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case LATEST_PRODUCTS_REQUEST:
      return { loading: true }

    case LATEST_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      }

    case LATEST_PRODUCTS_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const mostViewedProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case MOST_VIEWED_PRODUCTS_REQUEST:
      return { loading: true, products: [] }

    case MOST_VIEWED_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      }

    case MOST_VIEWED_PRODUCTS_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const shopProductsReducer = (
  state = { products: [], page: 1 },
  action
) => {
  switch (action.type) {
    case SHOP_PRODUCTS_REQUEST:
      return { loading: true, ...state }

    case SHOP_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: [...state.products, ...action.payload],
        page: state.page + 1,
      }

    case SHOP_PRODUCTS_FAIL:
      return { ...state, loading: false, error: action.payload }

    case SHOP_PRODUCTS_RESET:
      return { products: [], page: 1 }

    default:
      return state
  }
}

export const singleProductReducer = (
  state = { product: {}, loading: true },
  action
) => {
  switch (action.type) {
    case SINGLE_PRODUCT_REQUEST:
      return { loading: true }

    case SINGLE_PRODUCT_SUCCESS:
      return { loading: false, product: action.payload }

    case SINGLE_PRODUCT_FAIL:
      return { loading: false, error: action.payload }

    case SINGLE_PRODUCT_RESET:
      return { product: {}, loading: true }

    default:
      return state
  }
}
