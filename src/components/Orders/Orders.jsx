import React from "react";
import "./Orders.css";
import useProducts from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
   const [products, setProducts] = useProducts();
    const  [cart,setCart] = useCart(products);
    console.log(cart);
  return (
    <div className="shop-container">
    
       
       
    </div>
  );
};

export default Orders;
