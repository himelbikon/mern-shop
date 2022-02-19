import axios from "axios"
import {
  SUBSCRIPTION_CREATE_FAIL,
  SUBSCRIPTION_CREATE_REQUEST,
  SUBSCRIPTION_CREATE_SUCCESS,
} from "../constants/subscriptionConstants"

export const postSubscription = (email) => async (dispatch) => {
  try {
    dispatch({ type: SUBSCRIPTION_CREATE_REQUEST })

    const { data } = await axios.post(`/api/subscriptions`, { email })

    dispatch({ type: SUBSCRIPTION_CREATE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: SUBSCRIPTION_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
