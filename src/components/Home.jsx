import { Routes, Route, Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>PizzaWorld</h1>
      <h2>Welcome to the world of pizza</h2>
      <button>
        <Link to="/menu">Explore Pizzas</Link>
      </button>
    </div>
  );
};
