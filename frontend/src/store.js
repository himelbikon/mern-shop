import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import {
  latestProductsReducer,
  popularProductsReducer,
} from "./reducers/productReducers"

import { allCategoriesReducer } from "./reducers/categoryReducers"

const reducer = combineReducers({
  latestProducts: latestProductsReducer,
  popularProducts: popularProductsReducer,
  allCategories: allCategoriesReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
