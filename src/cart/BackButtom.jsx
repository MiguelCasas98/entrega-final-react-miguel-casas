import { Link } from "react-router-dom";

function BackButton({ to = "/", label = "Volver al inicio" }) {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <Link to={to}>
        <button
          style={{
            background: "rgba(167, 216, 240, 0.9)",
            color: "#003049",
            padding: "12px 20px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "600",
            backdropFilter: "blur(6px)",
            transition: "0.3s",
          }}
        >
          {label}
        </button>
      </Link>
    </div>
  );
}

export default BackButton;