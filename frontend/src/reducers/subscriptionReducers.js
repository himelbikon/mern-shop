import {
  SUBSCRIPTION_CREATE_FAIL,
  SUBSCRIPTION_CREATE_REQUEST,
  SUBSCRIPTION_CREATE_SUCCESS,
} from "../constants/subscriptionConstants"

export const createSubscriptionReducers = (state = {}, action) => {
  switch (action.type) {
    case SUBSCRIPTION_CREATE_REQUEST:
      return { loading: true }

    case SUBSCRIPTION_CREATE_SUCCESS:
      return { loading: false, success: true }

    case SUBSCRIPTION_CREATE_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}
