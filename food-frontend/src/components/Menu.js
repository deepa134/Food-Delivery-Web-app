import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Menu({ items }) {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <div>
      <h2>Menu</h2>
      {items.map((item) => {
        const inCart = cart.find(i => i.id === item.id && i.quantity > 0);

        return (
          <div key={item.id} style={{border:"1px solid #ccc", padding:"10px", margin:"10px"}}>
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>

            <button
              onClick={() => addToCart(item)}
              style={{
                backgroundColor: inCart ? "green" : "blue",
                color: "white",
                padding: "5px 10px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              {inCart ? "Added" : "Add to Cart"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
