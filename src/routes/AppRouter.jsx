import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarContainer from "../components/NavBar/NavBarContainer";
import ItemListContainer from "../itemListContainer/ItemListContainer";
import ItemDetailContainer from "../itemDetailContainer/ItemDetailContainer";
import CheckoutContainer from "../checkout/CheckoutContainer";
import HomeContainer from "../components/HomeContainer";
import CartContainer from "../cart/CartContainer";
function AppRouter() {
  return (
    <BrowserRouter>
      <NavBarContainer />

      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/checkout" element={<CheckoutContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;