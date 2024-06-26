import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import useProducts from "../../hooks/useProducts";

const Shop = () => {

 const [products, setProducts] = useProducts();
  const [cart, setCart] = useState([]);
 

 useEffect(()=>{
  const storedCart = getStoredCart();
  const savedCart = [] ;
  for(const id in storedCart ){
    const addedProduct = products.find(product => product.id === id);
    if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
         savedCart.push(addedProduct);
    }
  }
 setCart(savedCart) 
 },[products])
 

  const handleAddToCart = (SelectedProduct) => {
    console.log(SelectedProduct);
    let newCart = [];
    const exits = cart.find(product => product.id === SelectedProduct.id);
    if(!exits){
      SelectedProduct.quantity = 1;
      newCart = [...cart, SelectedProduct];
    }else{
       const rest = cart.filter(product => product.id !== SelectedProduct.id);
       exits.quantity = exits.quantity + 1;
       newCart = [...rest, exits];

    }
  
    setCart(newCart);
    addToDb(SelectedProduct.id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
