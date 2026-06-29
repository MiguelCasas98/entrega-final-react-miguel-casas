import { NavLink, Link } from "react-router-dom";
import CartWidgetContainer from "../CartWidget/CartWidgetContainer";
import logo from "../../assets/logo.png";

function NavBar({ categories, handleCategoryChange }) {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 30px",
        background: "#ffffff",
        borderBottom: "2px solid #eee",
        boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "#b7deea",
      }}
    >
      {/* IZQUIERDA: LOGO + NOMBRE */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            style={{
              height: "45px",
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          />
        </Link>

        <NavLink
          to="/"
          style={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#333",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#007bff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
        >
          MultiShop Express
        </NavLink>
      </div>

      {/* CENTRO: CATEGORÍAS */}
      <select
        onChange={handleCategoryChange}
        style={{
          padding: "8px 12px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "15px",
          cursor: "pointer",
          background: "#f8f8f8",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#eaeaea")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#f8f8f8")}
      >
        <option value="">Categorías</option>

        {categories.map((cat) => (
          <option key={cat.slug} value={cat.slug}>
            {cat.name}
          </option>
        ))}
      </select>

      {/* DERECHA: CARRITO */}
      <NavLink to="/cart">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            padding: "6px 10px",
            borderRadius: "6px",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "#f0f0f0")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "transparent")
          }
        >
          <CartWidgetContainer />
        </div>
      </NavLink>
    </nav>
  );
}

export default NavBar;