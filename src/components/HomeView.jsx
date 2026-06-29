import marbleBg from "../assets/marble1.jpg";

function HomeView({ images, index }) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        minHeight: "100vh",
        backgroundImage: `url(${marbleBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1>Bienvenido a MULTISHOP EXPRESS</h1>

      <div
        style={{
          width: "80%",
          margin: "30px auto",
          height: "400px",
          overflow: "hidden",
          borderRadius: "12px",
          position: "relative",
        }}
      >
        <img
          src={images[index]}
          alt="slide"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 0.8s ease-in-out",
          }}
        />
      </div>
    </div>
  );
}

export default HomeView;