import { db } from "./FirebaseConfig";
import { collection, setDoc, doc } from "firebase/firestore";

export async function importProducts() {
  const response = await fetch("https://dummyjson.com/products?limit=100");
  const data = await response.json();

  const products = data.products;

  for (const product of products) {
    const productRef = doc(collection(db, "products"), String(product.id));

    await setDoc(productRef, {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.images[0],
      stock: product.stock ?? 10
    });

    console.log("Producto importado:", product.title);
  }

  console.log("Importación completa");
}