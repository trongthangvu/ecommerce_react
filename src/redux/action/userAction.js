import { userInforLocal } from "../../services/local.service";
import { SET_LOGIN } from "../constants/userConstants";
import { message } from "antd";

export const setUser = (userData) => {
  return {
    type: SET_LOGIN,
    payload: userData,
  };
};
