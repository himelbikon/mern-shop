import {
  CART_ITEM_ADD,
  CART_ITEM_REMOVE,
  // CART_ITEM_UPDATE,
} from "../constants/cartConstants"

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ITEM_ADD:
      const { product, quantity } = action.payload

      const exists = state.cartItems.find((item) => item.product === product)

      if (exists) {
        return {
          cartItems: state.cartItems.map((item) => {
            return item.product._id === product._id
              ? { product, quantity }
              : item
          }),
        }
      } else {
        return { cartItems: [...state.cartItems, action.payload] }
      }

    case CART_ITEM_REMOVE:
      return {
        cartItems: state.cartItems.filter(
          (item) => item.product._id !== action.payload._id
        ),
      }

    // case CART_ITEM_UPDATE:
    //   return { loading: false, error: action.payload }

    default:
      return state
  }
}
