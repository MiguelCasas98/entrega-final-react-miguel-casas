console.log("CARGANDO getProductsByCategory.js REAL");

export async function getProductsByCategory(categoryId) {
  const res = await fetch(`https://dummyjson.com/products/category/${categoryId}`);
  const data = await res.json();
  return data.products;
}