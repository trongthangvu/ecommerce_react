import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  handleDeleteAction,
  handleChangeQuantityAction,
  handleCheckoutAction,
} from "../../redux/action/productAction";
import { userInforLocal } from "../../services/local.service";
import { https } from "../../services/urlConfig";

export default function OrderItem() {
  let dispatch = useDispatch();
  const cartItems = useSelector(
    (state) => state.productDetailReducer.cartItems
  );
  const handleChangeQuantity = (id, value) => {
    dispatch(handleChangeQuantityAction(id, value));
  };
  const handleDeleteItem = (id) => {
    dispatch(handleDeleteAction(id));
  };
  const handleCheckout = async () => {
    const user = userInforLocal.get();
    if (!user) {
      alert("Bạn cần đăng nhập để thanh toán.");
      return;
    }
    const data = {
      user: user.id,
      complete: true,
    };
    try {
      const response = await https.post("/orders/", data);
      console.log(response.data); // log data trả về từ server
      dispatch(handleCheckoutAction());
      alert("Thanh toán thành công!");
    } catch (error) {
      console.log(error);
      alert("Lỗi khi thanh toán!");
    }
  };
  const total = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.price * item.quantity,
    0
  );
  return (
    <div className="shopping-cart w-full max-w-md mx-auto rounded-md shadow-lg p-6">
      <div className="cart-header flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold">Shopping Cart</h2>
        <button className="text-gray-500 hover:text-gray-700">
          <Link to="/">Close</Link>
        </button>
      </div>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item flex items-center mb-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-md mr-4"
            />
            <div className="item-details">
              <h3 className="text-lg font-medium mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{item.description}</p>
              <p className="text-gray-700 font-medium">Price: {item.price}$</p>
              <div className="flex items-center mt-2">
                <input
                  type="number"
                  min="1"
                  className="w-20 h-8 border-gray-400 rounded-md px-2 mr-2"
                  value={item.quantity}
                  onChange={(e) =>
                    handleChangeQuantity(item.id, parseInt(e.target.value))
                  }
                />
                <button
                  onClick={() => handleDeleteItem(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded-md"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="font-bold py-2 px-4">Total: {total.toFixed(2)} $</div>
        <div className="cart-footer flex justify-end mt-6">
          <button
            onClick={handleCheckout}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
