let USER_INFOR = "USER_INFOR";
let CART_LOCAL = "CART_LOCAL";

export let userInforLocal = {
  // set lưu xuống
  set: (userData, data) => {
    let json = JSON.stringify(userData, data);
    localStorage.setItem(USER_INFOR, json);
  },
  get: () => {
    let json = localStorage.getItem(USER_INFOR);

    if (json) {
      return JSON.parse(json);
    } else {
      return null;
    }
  },
  remove: () => {
    localStorage.removeItem(USER_INFOR);
  },
};

export let cartLocal = {
  // set lưu xuống
  set: (cart) => {
    let json = JSON.stringify(cart);
    localStorage.setItem(CART_LOCAL, json);
  },
  get: () => {
    let json = localStorage.getItem(CART_LOCAL);

    if (json) {
      return JSON.parse(json);
    } else {
      return null;
    }
  },
  remove: () => {
    localStorage.removeItem(CART_LOCAL);
  },
};
