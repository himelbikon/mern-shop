import axios from "axios"
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/userConstants"

export const login = (email, password) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST })

    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }

    const { data } = await axios.post("/api/users/login", { email, password })

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem("userAuth", JSON.stringify(getState().userAuth))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const logout = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT })
  localStorage.removeItem("userAuth")
}
