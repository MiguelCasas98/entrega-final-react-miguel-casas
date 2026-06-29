import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function useCart() {
  const {
    cart,
    addItem,
    removeItem,
    clearCart,
    getTotalQuantity,
    getTotalPrice,
  } = useContext(CartContext);

  return {
    cart,
    addItem,
    removeItem,
    clearCart,
    getTotalQuantity,
    getTotalPrice,
  };
}