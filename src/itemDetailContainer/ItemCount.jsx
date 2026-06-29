function ItemCount({ count, increase, decrease, handleAdd }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <button onClick={decrease}>-</button>
        <span>{count}</span>
        <button onClick={increase}>+</button>
      </div>

      <button
        onClick={handleAdd}
        style={{ marginTop: "10px", padding: "5px 10px" }}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;