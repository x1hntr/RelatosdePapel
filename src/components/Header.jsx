import { Link } from "react-router-dom";
import logo from '../assets/rdp-logo.png';
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
    <img src={logo} alt="Relatos de Papel" className="header__logo-img" />
      <nav className="header__nav">
        <Link className="header__link" to="/">Landing</Link>
        <Link className="header__link" to="/home">Home</Link>
        <Link className="header__link" to="/carrito">Carrito 🛒</Link>
      </nav>
    </header>
  );
};

export default Header;
