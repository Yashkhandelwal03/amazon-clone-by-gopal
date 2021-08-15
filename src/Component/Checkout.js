import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";

const Checkout = () => {
  const [{ basket,user }, dispatch] = useStateValue();

  return (
    <>
      <div className="checkout">
        <div className="checkout_left">
          <div className="checkout_title">
            <h3>Hello,{user?.email}</h3>
            <br></br>
            <h2>Your Shopping Basket</h2>
          </div>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              price={item.price}
              rating={item.rating}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>
        <div className="checkout_right">
          <div className="checkout_title">
            <h2>Your Sub Total goes here</h2>
            <Subtotal />
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
