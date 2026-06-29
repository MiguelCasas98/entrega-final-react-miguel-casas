console.log("CARGANDO getProducts.js REAL");

export async function getProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    if (!data.products) return [];

    return data.products.map(p => ({
      ...p,
      image: p.images?.[0] || p.thumbnail || "/placeholder.png"
    }));
  } catch (error) {
    console.error("Error cargando productos:", error);
    return [];
  }
}

export async function getProductsByCategory(category) {
  try {
    const res = await fetch(`https://dummyjson.com/products/category/${category}`);
    const data = await res.json();

    // Si la categoría no existe o falla
    if (!data.products) return [];

    return data.products.map(p => ({
      ...p,
      image: p.images?.[0] || p.thumbnail || "/placeholder.png"
    }));
  } catch (error) {
    console.error("Error cargando categoría:", error);
    return [];
  }
}

export async function getProductById(id) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();

    // Si el producto no existe
    if (!data || data.message === "Product not found") {
      return null;
    }

    return {
      ...data,
      image: data.images?.[0] || data.thumbnail || "/placeholder.png"
    };
  } catch (error) {
    console.error("Error cargando producto:", error);
    return null;
  }
}
