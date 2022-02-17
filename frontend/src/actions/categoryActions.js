import axios from "axios"
import {
  ALL_CATEGORY_FAIL,
  ALL_CATEGORY_REQUEST,
  ALL_CATEGORY_SUCCESS,
} from "../constants/categoryConstants"

export const getAllCategories = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_CATEGORY_REQUEST })

    const { data } = await axios.get(`/api/categories`)

    dispatch({ type: ALL_CATEGORY_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: ALL_CATEGORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
