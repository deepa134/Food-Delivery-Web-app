import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, addToCart, decreaseQuantity, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate(); // for navigation

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map(item => (
        <div key={item.id} style={{borderBottom:"1px solid #ddd", padding:"10px"}}>
          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>
          <div>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <span style={{margin:"0 10px"}}>{item.quantity}</span>
            <button onClick={() => addToCart(item)}>+</button>
          </div>
          <p>Subtotal: ₹{item.price * item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove Item</button>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h3>Total Amount: ₹{total}</h3>
          <button
            onClick={() => navigate("/checkout")}
            style={{ marginTop: "10px", padding: "10px 15px", cursor: "pointer" }}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
