import axios from "axios"
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../constants/userConstants"

export const login = (email, password) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST })

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

export const register =
  (name, email, password, confirmPassword) => async (dispatch, getState) => {
    try {
      if (password !== confirmPassword) {
        dispatch({
          type: USER_REGISTER_FAIL,
          payload: "Passwords did not match!",
        })
      } else {
        dispatch({ type: USER_REGISTER_REQUEST })

        const { data } = await axios.post("/api/users/register", {
          name,
          email,
          password,
        })

        dispatch({
          type: USER_REGISTER_SUCCESS,
        })

        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: data,
        })

        localStorage.setItem("userAuth", JSON.stringify(getState().userAuth))
      }
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
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
