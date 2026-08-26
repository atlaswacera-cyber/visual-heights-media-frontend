import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <nav className="navigation" aria-label="Main navigation">
      <button
        className="navigation__toggle"
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation-list"
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        <span className="navigation__toggle-icon" aria-hidden="true">☰</span>
        <span className="navigation__toggle-label">Menu</span>
      </button>
      <ul
        className={`navigation__list ${
          isMenuOpen ? "navigation__list_open" : ""
        }`}
        id="main-navigation-list"
      >
        <li className="navigation__item">
          <NavLink className="navigation__link" to="/" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            className="navigation__link"
            to="/inspiration"
            onClick={closeMenu}
          >
            Inspiration
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            className="navigation__link"
            to="/dashboard"
            onClick={closeMenu}
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
