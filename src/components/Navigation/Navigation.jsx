import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation" aria-label="Main navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink className="navigation__link" to="/">
            Home
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink className="navigation__link" to="/inspiration">
            Inspiration
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink className="navigation__link" to="/dashboard">
            Dashboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
