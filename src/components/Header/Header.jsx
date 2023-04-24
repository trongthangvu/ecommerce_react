import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserNav from "./UserNav";
import { useSelector } from "react-redux";

export default function Header() {
  const cartItems = useSelector(
    (state) => state.productDetailReducer.cartItems
  );
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const [showCategory, setShowCategory] = useState(false);

  const handleCategoryClick = () => {
    setShowCategory(!showCategory);
  };
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null); // thêm state để lưu trữ ID danh mục được chọn

  const fetchCategories = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/categories/");
      const data = await response.json();
      setCategories(data.results);
    } catch (error) {
      console.error(error);
    }
  };
  const handleCategorySelect = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setShowCategory(false);
    console.log(categoryId);
  };
  useEffect(() => {
    fetchCategories({});
  }, []);
  return (
    <div className="shadow-lg sticky top-0 z-30 w-full px-2 py-2 bg-white sm:px-4 ">
      <div className="container mx-auto flex justify-between items-center h-20">
        <span className="logo font-bold text-red-600 text-2xl">
          Thương mại điện tử
        </span>
        <div className="space-x-5 font-medium">
          <span>
            <Link style={{ textDecoration: "none" }} to="/">
              Cửa Hàng
            </Link>
          </span>
          <span className="cursor-pointer" onClick={handleCategoryClick}>
            Loại Hàng
          </span>
          {showCategory && (
            <div className="mr-6 absolute bg-white border border-gray-300 z-10 mt-2 py-2 w-64">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={() => handleCategorySelect(category.id)} // thêm sự kiện khi click vào danh mục
                >
                  {category.name}
                </Link>
              ))}
            </div>
          )}
          <span>
            <Link to="/" style={{ textDecoration: "none" }}>
              Sản Phẩm
            </Link>
          </span>
          <span>
            <Link to="/order">
              <i className="fa fa-shopping-cart mx-2"></i>
            </Link>
            <span className="cart-quantity">{totalQuantity}</span>
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
