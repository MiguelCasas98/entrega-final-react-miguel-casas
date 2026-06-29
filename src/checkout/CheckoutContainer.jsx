import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import Swal from "sweetalert2";
import CheckoutForm from "./CheckoutForm";
import CheckoutSuccess from "./CheckoutSuccess";

function CheckoutContainer() {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [entrega, setEntrega] = useState("");
  const [direccion, setDireccion] = useState("");
  const [localidad, setLocalidad] = useState("");

  const [orderId, setOrderId] = useState(null);

  // ⭐ Manejo de inputs
  const handleChange = (e) => {
    let value = e.target.value;

    if (e.target.name === "phone") {
      value = value.replace(/[^0-9]/g, "");
    }

    setBuyer({ ...buyer, [e.target.name]: value });
  };

  // ⭐ Validaciones + Firebase
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.email || !buyer.phone) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor completá todos los campos",
      });
      return;
    }

    if (!entrega) {
      Swal.fire({
        icon: "warning",
        title: "Método de entrega",
        text: "Seleccioná un método de entrega",
      });
      return;
    }

    if (entrega === "envio" && (!direccion || !localidad)) {
      Swal.fire({
        icon: "warning",
        title: "Dirección incompleta",
        text: "Completá dirección y localidad",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(buyer.email)) {
      Swal.fire({
        icon: "error",
        title: "Email inválido",
        text: "Ingresá un email válido",
      });
      return;
    }

    if (buyer.phone.length < 7 || buyer.phone.length > 15) {
      Swal.fire({
        icon: "error",
        title: "Teléfono inválido",
        text: "El teléfono debe tener entre 7 y 15 números",
      });
      return;
    }

    const order = {
      buyer: {
        ...buyer,
        entrega,
        direccion: entrega === "envio" ? direccion : "Retira por punto de venta",
        localidad: entrega === "envio" ? localidad : "",
      },
      items: cart,
      total: getTotalPrice(),
      date: Timestamp.fromDate(new Date()),
    };

    const ordersRef = collection(db, "orders");
    const doc = await addDoc(ordersRef, order);

    setOrderId(doc.id);
    clearCart();
  };

  // ⭐ Si ya hay orden → mostrar pantalla de éxito
  if (orderId) {
    return <CheckoutSuccess orderId={orderId} />;
  }

  // ⭐ Si no → mostrar formulario
  return (
    <CheckoutForm
      buyer={buyer}
      entrega={entrega}
      direccion={direccion}
      localidad={localidad}
      handleChange={handleChange}
      setEntrega={setEntrega}
      setDireccion={setDireccion}
      setLocalidad={setLocalidad}
      handleSubmit={handleSubmit}
    />
  );
}

export default CheckoutContainer;