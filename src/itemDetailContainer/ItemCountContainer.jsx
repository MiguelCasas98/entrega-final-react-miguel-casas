import { useState } from "react";
import ItemCount from "./ItemCount";

function ItemCountContainer({ stock, onAdd }) {
  const [count, setCount] = useState(1);

  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    onAdd(count);
  };

  return (
    <ItemCount
      count={count}
      increase={increase}
      decrease={decrease}
      handleAdd={handleAdd}
    />
  );
}

export default ItemCountContainer;