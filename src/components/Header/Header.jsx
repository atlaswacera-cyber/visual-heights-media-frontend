import { Link } from "react-router-dom";
import logo from "../../images/vhm-logo.png";
import Navigation from "../Navigation/Navigation.jsx";
import "./Header.css";

function Header() {
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
      <Navigation />
    </header>
  );
}

export default Header;
