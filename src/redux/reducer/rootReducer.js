import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { productDetailReducer } from "./productDetailReducer";

export const rootReducer = combineReducers({
  userReducer,
  productDetailReducer,
});
