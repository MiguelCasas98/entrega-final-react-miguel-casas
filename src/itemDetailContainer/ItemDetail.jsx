import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemDetailView from "./ItemDetailView";

function ItemDetail({ product }) {
  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    addItem(product, quantity);
  };

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <ItemDetailView
      product={product}
      quantity={quantity}
      increase={increase}
      decrease={decrease}
      handleAdd={handleAdd}
    />
  );
}

export default ItemDetail;