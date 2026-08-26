import { Link } from "react-router-dom";
import logo from "../../images/vhm-logo.png";
import Navigation from "../Navigation/Navigation.jsx";
import "./Header.css";

function Header({ isLoggedIn, onLoginClick, onLogout }) {
  return (
    <header className="header">
      <Link className="header__brand-link" to="/">
        <img
          className="header__logo"
          src={logo}
          alt="Visual Heights Media logo"
        />
        <span className="header__brand">Visual Heights Media</span>
      </Link>
      <div className="header__actions">
        <Navigation />
        {isLoggedIn ? (
          <button className="header__auth-button" type="button" onClick={onLogout}>
            Sign out
          </button>
        ) : (
          <button
            className="header__auth-button"
            type="button"
            onClick={onLoginClick}
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
