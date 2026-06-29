import marbleBg from "../assets/marble1.jpg";

function CheckoutSuccess({ orderId }) {
  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        backgroundImage: `url(${marbleBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
      }}
    >
      <h2>¡Compra realizada con éxito! 🎉</h2>
      <p>Tu ID de orden es:</p>
      <h3>{orderId}</h3>
    </div>
  );
}

export default CheckoutSuccess;