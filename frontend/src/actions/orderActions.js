import axios from "axios"
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
} from "../constants/orderConstants"

export const createOrder = (order) => async (dispatch, getState) => {
  console.log("Order from action")
  console.log(order)

  try {
    dispatch({ type: ORDER_CREATE_REQUEST })

    const {
      userAuth: {
        userInfo: { token },
      },
    } = getState()

    const config = {
      headers: {
        //    "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }

    const { data } = await axios.post(`/api/orders`, order, config)

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
