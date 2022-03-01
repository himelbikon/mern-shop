// import axios from "axios"
import { CART_ITEM_ADD, CART_ITEM_REMOVE } from "../constants/cartConstants"

export const addToCart = (product, quantity) => (dispatch, getState) => {
  dispatch({
    type: CART_ITEM_ADD,
    payload: { product, quantity },
  })

  localStorage.setItem("cart", JSON.stringify(getState().cart))
}

export const deleteFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_ITEM_REMOVE,
    payload: id,
  })

  localStorage.setItem("cart", JSON.stringify(getState().cart))
}
