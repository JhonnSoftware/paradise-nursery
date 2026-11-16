
import { Link, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

import "./App.css";

function Home() {
  return (
    <main className="home-page">
      <div className="home-content">
        <h1>Paradise Nursery</h1>
        <h2>Bring Nature Into Your Home</h2>
        <p>
          Discover beautiful indoor plants and create a
          healthier, greener and more welcoming space.
        </p>

        <Link to="/plants" className="get-started-button">
          Get Started
        </Link>
      </div>
    </main>
  );
}

function App() {
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="app">
      <header className="navbar">
        <Link to="/" className="brand">
          Paradise Nursery
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/about">About Us</Link>
          <Link to="/cart" className="cart-nav">
            Cart 🛒 <span>{cartCount}</span>
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>

      <footer className="footer">
        <p>© 2026 Paradise Nursery. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
