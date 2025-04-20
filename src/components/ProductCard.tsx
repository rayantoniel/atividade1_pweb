import React from "react";
import "../styles/ProductCard.css";

interface ProductProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

export const ProductCard = ({ name, description, price, image }: ProductProps) => {
  return (
    <div className="product-card">
      <div className="product-card-top">
        <img src={image} alt={name} className="product-image" />
        <div className="product-info">
          <h2 className="product-name">{name}</h2>
          <p className="product-description">{description}</p>
        </div>
      </div>
      <div className="product-footer">
        <p className="product-price">R$ {price.toFixed(2)}</p>
        <button className="product-button">Ver mais</button>
      </div>
    </div>
  );
};