import { useCart } from "../hooks/useCart";

function CartItem({ item }) {
  const { removeItem } = useCart();

  return (
    <div className="cartItem">
      <img
        src={item.image}
        alt={item.title}
        className="cartItemImage"
      />

      <div className="cartItemInfo">
        <h3>{item.title}</h3>
        <p>Precio: ${item.price}</p>
        <p>Cantidad: {item.quantity}</p>
        <p className="subtotal">Subtotal: ${item.price * item.quantity}</p>
      </div>

      <button className="removeButton" onClick={() => removeItem(item.id)}>
        X
      </button>
    </div>
  );
}

export default CartItem;