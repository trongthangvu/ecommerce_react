import React, { useState, useEffect } from "react";
import { userInforLocal } from "../../services/local.service";
import { Link } from "react-router-dom";

export default function UserInfoPage() {
  const [userInfor, setUserInfor] = useState({});

  useEffect(() => {
    const user = userInforLocal.get();
    setUserInfor(user);
  }, []);
  if (!userInfor) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-lg font-medium mb-4">Bạn chưa đăng nhập</p>
        <Link to="/login" className="text-blue-500 hover:text-blue-600">
          Đăng nhập
        </Link>
      </div>
    );
  }
  return (
    <div>
      <Link to="/">
        <i class="fa fa-arrow-left"></i> Quay về trang chủ
      </Link>
      <div className="flex flex-col items-center space-y-4">
        <img
          src={userInfor.image}
          alt={userInfor.name}
          className="w-48 h-48 rounded-full"
        />
        <p className="text-lg">
          {userInfor.first_name} {userInfor.last_name}
        </p>
        <p className="text-gray-500">Tài khoản: {userInfor.username}</p>
        <div className="space-x-4">
          {/* <p className="text-gray-500">Email: {userInfor.email}</p>
      <p className="text-gray-500">Số điện thoại: {userInfor.phone}</p> */}
        </div>
        <div className="mt-4">
          <Link
            to="/history"
            style={{ textDecoration: "none" }}
            className="p-6 text-white bg-blue-400 hover:bg-blue-600 rounded-full"
          >
            Lịch sử mua hàng
          </Link>
        </div>
      </div>
    </div>
  );
}
