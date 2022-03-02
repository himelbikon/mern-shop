import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import {
  latestProductsReducer,
  mostViewedProductsReducer,
  shopProductsReducer,
  singleProductReducer,
} from "./reducers/productReducers"
import { allCategoriesReducer } from "./reducers/categoryReducers"
import { showcaseProductsReducers } from "./reducers/showcaseReducers"
import { createSubscriptionReducers } from "./reducers/subscriptionReducers"
import { cartReducer } from "./reducers/cartReducers"
import { userAuthReducer } from "./reducers/userReducers"

const reducer = combineReducers({
  latestProducts: latestProductsReducer,
  mostViewedProducts: mostViewedProductsReducer,
  allCategories: allCategoriesReducer,
  showcaseProducts: showcaseProductsReducers,
  createSubscription: createSubscriptionReducers,
  shopProducts: shopProductsReducer,
  singleProduct: singleProductReducer,
  cart: cartReducer,
  userAuth: userAuthReducer,
})

const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : { cartItems: [] },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
