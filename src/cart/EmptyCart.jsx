import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
        minHeight: "60vh",
      }}
    >
      <h2>Tu carrito está vacío 🛒</h2>

      <Link to="/">
        <button
          style={{
            marginTop: "20px",
            background: "rgba(167, 216, 240, 0.9)",
            color: "#003049",
            padding: "12px 20px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "600",
            transition: "0.3s",
          }}
        >
          Volver al inicio
        </button>
      </Link>
    </div>
  );
}

export default EmptyCart;