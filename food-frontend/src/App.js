import { Routes, Route, Link } from "react-router-dom";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Menu</Link> | <Link to="/cart">Cart</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Menu items={[{id:1, name:"Obbattu", price:10}, {id:2, name:"Jaggery Obbattu", price:12}]} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
