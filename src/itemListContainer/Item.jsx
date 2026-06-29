import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        width: "200px",
        borderRadius: "8px",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100%", borderRadius: "6px" }}
      />

      <h3>{product.title}</h3>
      <p>Precio: ${product.price}</p>

      <Link to={`/item/${product.id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
}

export default Item;