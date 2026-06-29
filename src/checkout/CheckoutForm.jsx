import marbleBg from "../assets/marble1.jpg";

const inputStyle = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "15px",
};

function CheckoutForm({
  buyer,
  entrega,
  direccion,
  localidad,
  handleChange,
  setEntrega,
  setDireccion,
  setLocalidad,
  handleSubmit,
}) {
  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        backgroundImage: `url(${marbleBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        noValidate
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: "320px",
          padding: "25px",
          borderRadius: "15px",
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(8px)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
          Finalizar compra
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={buyer.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="email"
          placeholder="Email"
          value={buyer.email}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleChange}
          style={inputStyle}
        />

        <select
          value={entrega}
          onChange={(e) => setEntrega(e.target.value)}
          style={inputStyle}
        >
          <option value="">Método de entrega...</option>
          <option value="envio">Envío a domicilio</option>
          <option value="retiro">Retiro por punto de venta</option>
        </select>

        {entrega === "envio" && (
          <>
            <input
              type="text"
              placeholder="Dirección"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              style={inputStyle}
            />

            <input
              type="text"
              placeholder="Localidad"
              value={localidad}
              onChange={(e) => setLocalidad(e.target.value)}
              style={inputStyle}
            />
          </>
        )}

        <button
          type="submit"
          style={{
            background: "rgba(167, 216, 240, 0.9)",
            color: "#003049",
            padding: "12px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "600",
            transition: "0.3s",
          }}
        >
          Finalizar compra
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;