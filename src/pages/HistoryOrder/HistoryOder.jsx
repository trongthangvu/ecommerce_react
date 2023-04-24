import React, { useState, useEffect } from "react";
import { ecommerceService } from "../../services/ecommerce.service";
import Header from "../../components/Header/Header";
import { format } from "date-fns";
import { userInforLocal } from "../../services/local.service";

export default function HistoryOder() {
  const [userInfor, setUserInfor] = useState({});
  useEffect(() => {
    const user = userInforLocal.get();
    setUserInfor(user);
  }, []);
  const [history, setHistory] = useState([]);
  const fetchProducts = async () => {
    try {
      const res = await ecommerceService.getHistoryOrder(userInfor.id);
      setHistory(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <Header />
      <div className="bg-gray-100 p-4">
        {history.map((item, index) => {
          if (item.user === userInfor.id) {
            return (
              <div key={index} className="my-4 border-b-2 pb-4">
                <p className="font-bold">ID: {item.user}</p>
                <span className="block">
                  Ngày đặt hàng:{" "}
                  {format(new Date(item.date_ordered), "dd/MM/yyyy")}
                </span>
                <p className="mt-1">
                  Giờ đặt hàng:{" "}
                  {format(new Date(item.date_ordered), "HH:mm:ss")}
                </p>
                <p className="mt-1 font-bold text-green-500">
                  Tình trạng: Đặt hàng thành công
                </p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
