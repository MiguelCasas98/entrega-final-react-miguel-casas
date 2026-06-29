export const searchImages = async (query) => {
  const API_KEY = "56376870-a914c04efb13a3dd8d651bbf0";

  const res = await fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
      query
    )}&image_type=photo`
  );

  const data = await res.json();
  return data.hits; // array de imágenes
};
