import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../services/getProducts";
import ItemListView from "./ItemListView";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      getProductsByCategory(categoryId).then(setProducts);
    } else {
      getProducts().then(setProducts);
    }
  }, [categoryId]);

  return <ItemListView products={products} />;
}

export default ItemListContainer;