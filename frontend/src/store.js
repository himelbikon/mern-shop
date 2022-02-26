import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import {
  latestProductsReducer,
  mostViewedProductsReducer,
} from "./reducers/productReducers"

import { allCategoriesReducer } from "./reducers/categoryReducers"

import { showcaseProductsReducers } from "./reducers/showcaseReducers"

import { createSubscriptionReducers } from "./reducers/subscriptionReducers"

const reducer = combineReducers({
  latestProducts: latestProductsReducer,
  mostViewedProducts: mostViewedProductsReducer,
  allCategories: allCategoriesReducer,
  showcaseProducts: showcaseProductsReducers,
  createSubscription: createSubscriptionReducers,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
