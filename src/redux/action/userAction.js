import { userInforLocal } from "../../services/local.service";
import { SET_LOGIN } from "../constants/userConstants";
import { message } from "antd";
// import { userServ } from "../../services/user.service";

// export const setLoginActionService = (values, onSuccess) => {
//   return (dispatch) => {
//     userServ
//       .postLogin(values)
//       .then((res) => {
//         console.log(res);
//         // lưu thông tin đăng nhập xuống localStorage
//         userInforLocal.set(res.data.content);
//         dispatch({
//           type: SET_LOGIN,
//           payload: res.data.content,
//         });
//         onSuccess();
//         message.success("Đăng nhập thành công");
//         // setTimeout(() => {
//         //   navigate("/");
//         // }, 1000);
//       })
//       .catch((err) => {
//         message.error(err.response.data.content);
//         console.log(err);
//       });
//   };
// };

export const setUser = (userData) => {
  return {
    type: SET_LOGIN,
    payload: userData,
  };
};
