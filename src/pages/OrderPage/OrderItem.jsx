import React from "react";

export default function OrderItem() {
  return (
    <div className="shopping-cart w-full max-w-md mx-auto rounded-md shadow-lg p-6">
      <div className="cart-header flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold">Shopping Cart</h2>
        <button className="text-gray-500 hover:text-gray-700">Close</button>
      </div>
      <div className="cart-items">
        <div className="cart-item flex items-center mb-4">
          <img
            src=""
            alt=""
            className="w-20 h-20 object-cover rounded-md mr-4"
          />
          <div className="item-details">
            <h3 className="text-lg font-medium mb-2">name</h3>
            <p className="text-gray-600 text-sm mb-2">mota</p>
            <p className="text-gray-700 font-medium">Price: 20</p>
            <div className="flex items-center mt-2">
              <input
                type="number"
                min="1"
                className="w-20 h-8 border-gray-400 rounded-md px-2 mr-2"
              />
            </div>
          </div>
        </div>
        <div className="font-bold py-2 px-4">Total</div>
        <div className="cart-footer flex justify-end mt-6">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
