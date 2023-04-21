import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { layThongTinChiTietSanPham } from "../../redux/action/productAction";
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
  console.log("productDetail: ", productDetail);

  return (
    <div>
      <Header />
      <div>DetailPage</div>
    </div>
  );
}
