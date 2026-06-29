import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartWidget from "./CartWidget";

function CartWidgetContainer() {
  const { getTotalQuantity } = useContext(CartContext);
  const total = getTotalQuantity();

  return <CartWidget total={total} />;
}

export default CartWidgetContainer;