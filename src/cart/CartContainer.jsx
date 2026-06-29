import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import EmptyCart from "./EmptyCart";
import { useCart } from "../hooks/useCart";
import CartView from "./CartView";

function CartContainer() {
  const { cart, getTotalPrice, clearCart } = useCart();

  if (cart.length === 0) return <EmptyCart />;

  return (
    <CartView
      cart={cart}
      getTotalPrice={getTotalPrice}
      clearCart={clearCart}
    />
  );
}

export default CartContainer;