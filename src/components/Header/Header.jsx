import React from "react";
import { Link } from "react-router-dom";
import UserNav from "./UserNav";

export default function Header() {
  return (
    <div className="shadow-lg sticky top-0 z-30 w-full px-2 py-2 bg-white sm:px-4 ">
      <div className="container mx-auto flex justify-between items-center h-20">
        <span className="logo font-bold text-red-600 text-2xl">
          Thương mại điện tử
        </span>
        <div className="space-x-5 font-medium">
          <span>Loại Hàng</span>
          <span>Cửa Hàng</span>
          <span>
            <Link style={{ textDecoration: "none" }}>Sản Phẩm</Link>
          </span>
          <span>
            <Link to="/order">
              <i className="fa fa-shopping-cart mx-2"></i>
            </Link>
          </span>
          <span>
            <Link>
              <i className="fa fa-user"></i>
            </Link>
          </span>
        </div>
        <UserNav />
      </div>
    </div>
  );
}
