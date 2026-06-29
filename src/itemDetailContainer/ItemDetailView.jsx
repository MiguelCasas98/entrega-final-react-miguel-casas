function ItemDetailView({ product, quantity, increase, decrease, handleAdd }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        padding: "40px",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "420px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      />

      <div
        style={{
          width: "380px",
          padding: "20px",
          borderRadius: "12px",
          border: "1px solid #ddd",
          boxShadow: "0 4px 12px rgba(0,0,0,0.10)",
          background: "white",
        }}
      >
        <h2 style={{ fontSize: "26px", marginBottom: "10px" }}>
          {product.title}
        </h2>

        <h3
          style={{
            fontSize: "24px",
            color: "#007bff",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          ${product.price}
        </h3>

        <p style={{ fontSize: "16px", marginBottom: "30px" }}>
          {product.description}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <button
            onClick={decrease}
            style={{
              padding: "8px 12px",
              fontSize: "18px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            –
          </button>

          <span style={{ fontSize: "20px", fontWeight: "bold" }}>
            {quantity}
          </span>

          <button
            onClick={increase}
            style={{
              padding: "8px 12px",
              fontSize: "18px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            +
          </button>
        </div>

        <button
          onClick={handleAdd}
          style={{
            width: "100%",
            background: "#007bff",
            color: "white",
            padding: "14px 24px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "bold",
            transition: "0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#0056d6")}
          onMouseLeave={(e) => (e.target.style.background = "#007bff")}
        >
          Agregar al carrito 🛒
        </button>
      </div>
    </div>
  );
}

export default ItemDetailView;