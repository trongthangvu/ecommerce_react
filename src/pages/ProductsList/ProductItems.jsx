import React from "react";
import { NavLink } from "react-router-dom";

export default function ProductItems({ items }) {
  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      <div className="relative card border border-black p-4 rounded-lg ">
        <div className="card-top">
          <img src={items.image} className="w-full h-60 object-cover" alt="" />
        </div>
        <div className="flex flex-col card-bottom">
          <h2 className="text-2xl text-white">{items.name}</h2>
          <p>{items.description.substr(0, 100) + "..."}</p>
          <NavLink className="absolute left-0 bottom-0 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 ">
            Đặt hàng
          </NavLink>
        </div>
      </div>
    </div>
  );
}
