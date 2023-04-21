import { https } from "./urlConfig";
export const ecommerceService = {
  getCategory: (params) => {
    let uri = "/categories/";
    return https.get(uri, params);
  },
  getProducts: (params) => {
    let uri = "/products/";
    return https.get(uri, params);
  },
  getProductsDetail: (id) => {
    let uri = `/products/${id}/`;
    return https.get(uri);
  },
};
