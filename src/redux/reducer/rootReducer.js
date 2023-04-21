import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";
import { productDetailReducer } from "./productDetailReducer";

export const rootReducer = combineReducers({
  productReducer,
  userReducer,
  productDetailReducer,
});
