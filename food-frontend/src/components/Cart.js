import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  // Calculate total price
  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index}>
              <h4>{item.name}</h4>
              <p>Price: ${item.price}</p>
            </div>
          ))}
          <h3>Total: ${total}</h3>
          <button onClick={() => alert("Order Placed!")}>Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
