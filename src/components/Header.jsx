import { Routes, Route, Link } from "react-router-dom";

import { Home } from "/src/components/Home";
import { Menu } from "/src/components/Menu";
import { Cart } from "/src/components/Cart";

export const Header = () => {
  return (
    <div>
      <h1>PizzaWorld</h1>
      <nav>
        <Link to="/">Home</Link> |<Link to="/menu">Menu</Link> |
        <Link to="/cart">Cart</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};
