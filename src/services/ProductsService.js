console.log("CARGANDO ProductsService.js REAL");

import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where
} from "firebase/firestore";

import { db } from "./firebaseConfig";

// Obtener TODOS los productos
export const getProducts = async () => {
  const productsRef = collection(db, "products");
  const snapshot = await getDocs(productsRef);

  return snapshot.docs.map((docu) => ({
    id: docu.id,
    ...docu.data()
  }));
};

// Obtener productos filtrados por categoría
export const getProductsByCategory = async (categoryId) => {
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("category", "==", categoryId));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((docu) => ({
    id: docu.id,
    ...docu.data()
  }));
};

// Obtener un producto por ID
export const getProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const snapshot = await getDoc(docRef);

  return {
    id: snapshot.id,
    ...snapshot.data()
  };
};