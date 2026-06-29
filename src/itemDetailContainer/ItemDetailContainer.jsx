import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/FirebaseConfig";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const ref = doc(db, "products", id);
      const snapshot = await getDoc(ref);

      if (snapshot.exists()) {
        setProduct({
          id: snapshot.id,
          ...snapshot.data(),
        });
      } else {
        setProduct(null);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <h2>Cargando producto...</h2>;
  }

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;