import React from "react";
import "./Cart.css";

function Cart({ cart }) {
  // const cart = props;
  //  console.log(cart);
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping ;
  }

  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <br />
      <p>Selected Items: {quantity}</p> <br />
      <p>Total Price: ${total}</p>
      <br />
      <p>Total Shipping: ${shipping} </p>
      <br />
      <p>Tax:{tax} </p>
      <br />
      <h5>Grand Total : {grandTotal.toFixed(2)}</h5>
    </div>
  );
}

export default Cart;
