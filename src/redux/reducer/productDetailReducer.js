import { PRODUCT_DETAIL } from "../constants/productConstant";

const initialState = {
  productDetail: {},
};

export let productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_DETAIL: {
      state.productDetail = action.productDetail;
      return { ...state };
    }

    default:
      return state;
  }
};
