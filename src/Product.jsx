import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>16.01</strong>
        </p>
        <div className="product__rating">
          <p>*</p>
        </div>
      </div>
      <img
        src="https://rukminim2.flixcart.com/image/416/416/koudfgw0/regionalbooks/r/x/m/the-lean-startup-original-imag37egg7hyqpmx.jpeg?q=70&crop=false"
        alt=""
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
