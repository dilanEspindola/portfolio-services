import { NavLink } from "react-router-dom";
import logo from "../images/logo.ico";
import "./css/header.css";

const HeaderMenu = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active" : "navegacion-txt"
            }
          >
            inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sobre-nosotros"
            className={({ isActive }) =>
              isActive ? "active" : "navegacion-txt"
            }
          >
            sobre nosotros
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/nuestros-productos"
            className={({ isActive }) =>
              isActive ? "active" : "navegacion-txt"
            }
          >
            nuestros productos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contactanos"
            className={({ isActive }) =>
              isActive ? "active" : "navegacion-txt"
            }
          >
            contactanos
          </NavLink>
        </li>
      </nav>
    </header>
  );
};
export default HeaderMenu;
