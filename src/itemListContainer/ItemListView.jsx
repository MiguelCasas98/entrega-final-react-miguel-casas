import { Link } from "react-router-dom";
import marbleBg from "../assets/marble1.jpg";

function ItemListView({ products }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        backgroundImage: `url(${marbleBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {products.map((prod) => (
          <div
            key={prod.id}
            style={{
              background: "rgba(255,255,255,0.8)",
              padding: "15px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src={prod.image}
              alt={prod.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />

            <h3>{prod.title}</h3>
            <p style={{ fontWeight: "bold" }}>${prod.price}</p>

            <Link to={`/item/${prod.id}`}>
              <button
                style={{
                  marginTop: "10px",
                  padding: "10px 15px",
                  background: "rgba(167, 216, 240, 0.9)",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Ver detalle
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListView;