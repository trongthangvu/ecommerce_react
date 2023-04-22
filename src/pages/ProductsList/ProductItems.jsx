import React from "react";
import { Link } from "react-router-dom";
import { productDetailReducer } from "../../redux/reducer/productDetailReducer";
import { useSelector, useDispatch } from "react-redux";
import { handleAddAction } from "../../redux/action/productAction.js";

export default function ProductItems({ items }) {
  let dispatch = useDispatch();
  const handleAddProduct = () => {
    dispatch(handleAddAction(items));
  };
  return (
    <div className="relative card border border-black p-4 rounded-lg ">
      <div className="card-top">
        <Link to={`/detail/${items.id}`}>
          <img src={items.image} className="w-full h-60 object-cover" alt="" />
        </Link>
      </div>
      <div className="card-bottom">
        <h2 className="text-2xl text-red-400">{items.name}</h2>
        <div className="flex ">
          <p className="mb-8 mr-12">{items.description}</p>
          <p>{items.price}$</p>
        </div>

        <button
          onClick={handleAddProduct}
          className="absolute left-0 bottom-0 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 content-center rounded"
        >
          Đặt hàng
        </button>
      </div>
    </div>
  );
}
