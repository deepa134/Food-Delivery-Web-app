import { Routes, Route, Link } from "react-router-dom";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Menu</Link> | 
        <Link to="/cart">Cart</Link> | 
        <Link to="/checkout">Checkout</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Menu items={[
          { id: 1, name: "Obbattu", price: 25 },
          { id: 2, name: "Jaggery Obbattu", price: 30 }
        ]} />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
