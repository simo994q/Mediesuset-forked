import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss";
import Logo from "../../assets/Logo.png";

export const Navbar = () => {
  return (
    <nav className={style.navbarStyle}>
      <div>
        <img src={Logo} alt="Mediesuset-logo" />
        <h4>4 - 7 Juli 2022</h4>
      </div>

      <ul>
        <li>
          <NavLink to="/forside">Forside</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/camps">Camps</NavLink>
        </li>
        <li>
          <NavLink to="/billetter">Billetter</NavLink>
        </li>
        <li>
          <NavLink to="/info">Praktisk Info</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};
