import { Link } from "react-router-dom";

function CartSummary({ total }) {
  return (
    <div className="cartSummary">
      <h2>Total: ${total}</h2>

      <Link to="/checkout">
        <button className="checkoutButton">
  Finalizar compra
</button>
      </Link>
    </div>
  );
}

export default CartSummary;