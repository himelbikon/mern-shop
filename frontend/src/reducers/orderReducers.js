import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_RESET,
  ORDER_CREATE_SUCCESS,
} from "../constants/orderConstants"

export const createOrderReducer = (state = { order: {} }, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true }

    case ORDER_CREATE_SUCCESS:
      return { loading: false, order: action.payload, success: true }

    case ORDER_CREATE_FAIL:
      return { loading: false, error: action.payload }

    case ORDER_CREATE_RESET:
      return { order: {} }

    default:
      return state
  }
}
