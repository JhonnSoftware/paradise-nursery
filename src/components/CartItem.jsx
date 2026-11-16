
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Thank you for shopping at Paradise Nursery! Checkout Coming Soon.");
  };

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <h1>Your Shopping Cart</h1>
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Discover our beautiful indoor plants.</p>
          <Link to="/plants" className="primary-link">
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <h1>Your Shopping Cart</h1>
      <p className="cart-count">Total items: {totalItems}</p>

      <div className="cart-layout">
        <div className="cart-products">
          {cartItems.map((item) => (
            <article className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>Unit price: S/ {item.price.toFixed(2)}</p>
                <p>
                  Subtotal: S/ {(item.price * item.quantity).toFixed(2)}
                </p>

                <div className="quantity-controls">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    aria-label={`Decrease ${item.name} quantity`}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    aria-label={`Increase ${item.name} quantity`}
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-button"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </article>
          ))}
        </div>

        <aside className="cart-summary">
          <h2>Order Summary</h2>
          <p>Products: {totalItems}</p>
          <h3>Total: S/ {total.toFixed(2)}</h3>

          <button className="checkout-button" onClick={handleCheckout}>
            Checkout
          </button>

          <button
            className="clear-button"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>

          <Link to="/plants" className="continue-link">
            Continue Shopping
          </Link>
        </aside>
      </div>
    </main>
  );
}

export default CartItem;
