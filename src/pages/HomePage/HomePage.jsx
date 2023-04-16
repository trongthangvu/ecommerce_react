import React from "react";
import ProductList from "../ProductsList/ProductList";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
}
