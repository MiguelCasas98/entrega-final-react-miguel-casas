import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../../services/getCategories";
import NavBar from "./NavBar";

function NavBarContainer() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  const handleCategoryChange = (e) => {
    if (e.target.value !== "") {
      navigate(`/category/${e.target.value}`);
    }
  };

  return (
    <NavBar
      categories={categories}
      handleCategoryChange={handleCategoryChange}
    />
  );
}

export default NavBarContainer;