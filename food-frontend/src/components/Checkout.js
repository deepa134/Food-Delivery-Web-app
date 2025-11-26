import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cart, setCart } = useContext(CartContext); // get cart to clear it after order
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(""); // message to display

  const handleSubmit = () => {
    if (!name || !address || !phone) {
      setMessage("Please fill all details!");
      return;
    }

    // Clear cart after order
    setCart([]);

    // Show success message on page
    setMessage(`Order placed successfully!\nName: ${name}\nAddress: ${address}\nPhone: ${phone}`);

    // Clear form
    setName("");
    setAddress("");
    setPhone("");
  };

  if (cart.length === 0 && !message) 
    return <p>Your cart is empty. Add items before checkout.</p>;

  return (
    <div>
      <h2>Checkout</h2>

      {message && (
        <div style={{border: "1px solid green", padding: "10px", marginBottom: "15px", backgroundColor: "#e6ffe6"}}>
          {message.split("\n").map((line, idx) => (
            <p key={idx} style={{margin: "5px 0"}}>{line}</p>
          ))}
        </div>
      )}

      {!message && (
        <>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          /><br/>
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={e => setAddress(e.target.value)}
          /><br/>
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          /><br/><br/>
          <button onClick={handleSubmit}>Place Order</button>
        </>
      )}
    </div>
  );
}

export default Checkout;
