import {
  ADD_PRODUCT,
  BUY_PRODUCT,
  CHANGE_QUANTITY,
  DELETE_PRODUCT,
} from "../constants/productConstant.js";
import Swal from "sweetalert2";

const initialState = {
  cartProduct: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT: {
      let index = state.cartProduct.findIndex((item) => item.id == payload.id);
      if (index == -1) {
        state.cartProduct.push({ ...payload, soLuong: 1 });
      } else {
        state.cartProduct[index].soLuong++;
      }
      return { ...state, cartProduct: [...state.cartProduct] };
    }
    case DELETE_PRODUCT:
      {
        let newCart = state.cartProduct.filter((item) => item.id != payload.id);

        return { ...state, cartProduct: newCart };
      }
      break;
    case CHANGE_QUANTITY:
      {
        console.log(payload);
        let index = state.cartProduct.findIndex(
          (item) => item.id == payload.id
        );
        if (index != -1) {
          state.cartProduct[index].soLuong += payload.value;
          if (state.cartProduct[index].soLuong <= 0) {
            state.cartProduct.splice(index, 1);
          }
        }
        return { ...state, cartProduct: [...state.cartProduct] };
      }
      break;
    case BUY_PRODUCT: {
      if (state.cartShoe.length == 0) {
        setTimeout(() => {
          Swal.fire({
            title: "",
            html: `<div>Thất bại là mẹ thành công</div>`,
            icon: "error",
            confirmButtonText: "Đóng",
          });
        }, 0);
      } else {
        state.cartShoe = [];
        setTimeout(() => {
          Swal.fire({
            title: "",
            html: `<div>mua hàng thành công</div>`,
            icon: "success",
            confirmButtonText: "Đóng",
          });
        }, 0);
      }
      return { ...state, cartShoe: [...state.cartShoe] };
    }
    default:
      return state;
  }
};
