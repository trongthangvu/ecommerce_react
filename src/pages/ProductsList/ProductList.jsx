import React, { useState, useEffect } from "react";
import { ecommerceService } from "../../services/ecommerce.service";
import ProductItems from "./ProductItems";

const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const fetchProducts = async (page = 1) => {
    const params = ecommerceService.getProducts({
      soTrang: page,
    });
    try {
      const res = await ecommerceService.getProducts(params);
      setProductData(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts({});
  }, []);

  return (
    <div className="my-16 mr-0 grid grid-cols-4 gap-4">
      {productData.map((item) => (
        <ProductItems key={item.id} items={item} />
      ))}
    </div>
  );
};

export default ProductList;
