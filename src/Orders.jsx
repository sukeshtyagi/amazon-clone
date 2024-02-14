import React, { useState } from "react";
import "./Orders.css";
import { useLocation } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";

function Orders() {
  const { basket } = useLocation().state;
  console.log(basket);

  const timestamp = new Date().toLocaleString();
  return (
    <div className="orders">
      <div className="orders__title">
        <h2>Your orders:</h2>
        <h2>Order details:</h2>
      </div>
      <div className="orders__details">
        <p>Order ID: {crypto.randomUUID()}</p>
        <p>Order Placed: {timestamp}</p>
      </div>

      {basket.map((item) => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </div>
  );
}

export default Orders;
