import { useState, useEffect } from "react";
import cosmeticos from "../assets/cosmeticos.jpg";
import perfumes from "../assets/perfumes.jpg";
import lentes from "../assets/lentes.jpg";
import calzados from "../assets/calzados.jpg";
import tecnologia from "../assets/tecnologia.jpg";
import HomeView from "./HomeView";

function HomeContainer() {
  const images = [cosmeticos, perfumes, lentes, calzados, tecnologia];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return <HomeView images={images} index={index} />;
}

export default HomeContainer;