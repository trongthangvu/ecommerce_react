import React from "react";

export default function ProductItems({ items }) {
  return (
    <div className="relative card border border-black p-4 rounded-lg ">
      <div className="card-top">
        <img src={items.image} className="w-full h-60 object-cover" alt="" />
      </div>
      <div className="card-bottom">
        <h2 className="text-2xl text-white ">{items.name}</h2>
        <p className="mb-8">{items.description}</p>
        <button className="absolute left-0 bottom-0 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 content-center">
          Đặt hàng
        </button>
      </div>
    </div>
  );
}
