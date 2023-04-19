import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  CHANGE_QUANTITY,
} from "../constants/productConstant";

export const handleAddShoeAction = (item) => ({
  type: ADD_PRODUCT,
  payload: id,
});
export const handleDeleteShoeAction = (idItem) => ({
  type: DELETE_PRODUCT,
  payload: {
    idItem,
  },
});
export const handleChangeQuantityAction = (idItem, value) => ({
  type: CHANGE_QUANTITY,
  payload: {
    idItem,
    value,
  },
});
