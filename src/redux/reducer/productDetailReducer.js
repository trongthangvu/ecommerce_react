import {
  PRODUCT_DETAIL,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  CHANGE_QUANTITY,
  CHECKOUT,
} from "../constants/productConstant";

const initialState = {
  productDetail: {},
  cartItems: [],
};

export let productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_DETAIL: {
      state.productDetail = action.productDetail;
      return { ...state };
    }
    case ADD_PRODUCT:
      const addedProduct = action.payload;
      const existingProduct = state.cartItems.find(
        (product) => product.id === addedProduct.id
      );
      if (existingProduct) {
        const updatedCartItems = state.cartItems.map((product) =>
          product.id === addedProduct.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        addedProduct.quantity = 1; // set the quantity property here
        return {
          ...state,
          cartItems: [...state.cartItems, addedProduct],
        };
      }
    case DELETE_PRODUCT: {
      const { payload } = action;
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== payload),
      };
    }
    case CHANGE_QUANTITY: {
      const { cartItems } = state;
      const { idItem, value } = action.payload;
      const newCartItems = cartItems.map((item) =>
        item.id === idItem ? { ...item, quantity: value } : item
      );
      return { ...state, cartItems: newCartItems };
    }
    case CHECKOUT:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
