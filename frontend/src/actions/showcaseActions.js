import axios from "axios"
import {
  SHOWCASE_PRODUCTS_FAIL,
  SHOWCASE_PRODUCTS_REQUEST,
  SHOWCASE_PRODUCTS_SUCCESS,
} from "../constants/showcaseConstants"

export const getShowcaseProducts = () => async (dispatch) => {
  try {
    dispatch({ type: SHOWCASE_PRODUCTS_REQUEST })

    const { data } = await axios.get(`/api/showcases`)

    dispatch({ type: SHOWCASE_PRODUCTS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: SHOWCASE_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
