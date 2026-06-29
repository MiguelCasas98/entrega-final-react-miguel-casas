import cartIcon from "../../assets/cart.png";

function CartWidget({ total }) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        padding: "5px",
      }}
    >
      <img
        src={cartIcon}
        alt="cart"
        style={{ width: "30px", height: "30px" }}
      />

      {total > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-6px",
            right: "-6px",
            background: "#ff3b3b",
            color: "white",
            fontSize: "13px",
            fontWeight: "700",
            padding: "4px 8px",
            borderRadius: "50%",
            minWidth: "22px",
            textAlign: "center",
            fontFamily: "Arial, sans-serif",
            boxShadow: "0 2px 5px rgba(0,0,0,0.25)",
          }}
        >
          {total}
        </span>
      )}
    </div>
  );
}

export default CartWidget;