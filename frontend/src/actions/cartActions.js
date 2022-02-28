// import axios from "axios"
import { CART_ITEM_ADD } from "../constants/cartConstants"

export const addToCart = (product, quantity) => (dispatch) => {
  dispatch({
    type: CART_ITEM_ADD,
    payload: { product, quantity },
  })
}
