import React from "react";
import { NavLink } from "react-router-dom";

export default function UserNav() {
  return (
    <div>
      <NavLink
        style={{ textDecoration: "none" }}
        to="/login"
        className="bg-red-600 text-white px-5 py-2 rounded shadow-lg mr-4"
      >
        Đăng nhập
      </NavLink>
      <NavLink
        style={{ textDecoration: "none" }}
        to="/register"
        className="bg-black text-white px-5 py-2 rounded shadow-lg"
      >
        Đăng ký
      </NavLink>
    </div>
  );
}
