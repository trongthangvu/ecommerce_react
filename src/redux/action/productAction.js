import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  CHANGE_QUANTITY,
  PRODUCT_DETAIL,
  CHECKOUT,
} from "../constants/productConstant";
import { ecommerceService } from "../../services/ecommerce.service";

export const layThongTinChiTietSanPham = (id) => {
  return async (dispatch) => {
    try {
      const res = await ecommerceService.getProductsDetail(id);
      // dua len redux
      dispatch({
        type: PRODUCT_DETAIL,
        productDetail: res.data,
      });
    } catch (e) {
      console.log("e: ", e);
    }
  };
};

export const handleAddAction = (item) => ({
  type: ADD_PRODUCT,
  payload: item,
});
export const handleDeleteAction = (idItem) => ({
  type: DELETE_PRODUCT,
  payload: idItem,
});
export const handleChangeQuantityAction = (idItem, value) => ({
  type: CHANGE_QUANTITY,
  payload: {
    idItem,
    value,
  },
});
export const handleCheckoutAction = () => ({
  type: CHECKOUT,
});
