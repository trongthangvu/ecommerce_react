import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  layThongTinChiTietSanPham,
  handleAddAction,
} from "../../redux/action/productAction";
import { productDetailReducer } from "../../redux/reducer/productDetailReducer";
import Header from "../../components/Header/Header";

export default function DetailPage() {
  const productDetail = useSelector(
    (state) => state.productDetailReducer.productDetail
  );
  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    // lay thong tin param tu url
    dispatch(layThongTinChiTietSanPham(id));
  }, [dispatch, id]);
  const handleAddProduct = (items) => {
    dispatch(handleAddAction(items));
  };
  return (
    <div className="container mx-auto mt-8">
      <Header />
      <div className="p-4 bg-white rounded-md shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold">{productDetail.name}</h1>
          <span className="text-gray-500">Giá: {productDetail.price}$</span>
        </div>
        <div className="mb-4">
          <img
            className="w-full rounded-md"
            src={productDetail.image}
            alt={productDetail.name}
          />
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">{productDetail.description}</p>
          <button
            onClick={() => handleAddProduct(productDetail)}
            className="rounded bg-blue-400 p-1"
          >
            <Link to="/order">Đặt hàng</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
