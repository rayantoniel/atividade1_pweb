import React from "react";
import { ProductCard } from "./ProductCard";
import { mockProducts } from "../data/mockProducts";
import "../styles/ProductList.css";

export const ProductList = () => {
  return (
    <div className="product-grid">
      {mockProducts.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};
