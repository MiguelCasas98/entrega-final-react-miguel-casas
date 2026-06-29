import "./Cart.css";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

function CartView({ cart, getTotalPrice, clearCart }) {
  return (
    <div className="cartContainer">
      <h2 className="cartTitle">Carrito de compras</h2>

      <div className="cartItems">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <button className="clearCartButton" onClick={clearCart}>
        Vaciar carrito
      </button>

      <CartSummary total={getTotalPrice()} />
    </div>
  );
}

export default CartView;