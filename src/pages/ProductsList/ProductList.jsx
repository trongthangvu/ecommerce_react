import React, { useState, useEffect } from "react";
import { ecommerceService } from "../../services/ecommerce.service";
import ProductItems from "./ProductItems";
import { Link } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";
import { productDetailReducer } from "../../redux/reducer/productDetailReducer";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCategory } from "../../redux/action/productAction.js";
const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const [page, setPage] = useState(1);
  const selectedCategory = useSelector(
    (state) => state.productDetailReducer.selectedCategoryId
  );
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const params = {
      page: page,
      category: selectedCategory,
    };
    try {
      const res = await ecommerceService.getProducts(params);
      setProductData(res.data.results);
      dispatch(setSelectedCategory(selectedCategory));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page, selectedCategory]);

  const handleClick = (pageNumber) => {
    setPage(pageNumber);
  };

  const renderPaginationItems = () => {
    const items = [];
    for (let i = 1; i <= 5; i++) {
      items.push(
        <Pagination.Item key={i} onClick={() => handleClick(i)}>
          <Link to={`/?page=${i}`}>{i}</Link>
        </Pagination.Item>
      );
    }
    return items;
  };

  return (
    <div>
      <div className="my-16 mr-0 grid grid-cols-4 gap-4">
        {productData.map((item) => (
          <ProductItems key={item.id} items={item} />
        ))}
      </div>
      <Pagination>{renderPaginationItems()}</Pagination>
    </div>
  );
};

export default ProductList;
