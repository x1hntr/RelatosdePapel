import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
    <img src="\src\assets\rdp-logo.png" alt="Relatos de Papel" className="header__logo-img" />
      <nav className="header__nav">
        <Link className="header__link" to="/">Inicio</Link>
        <Link className="header__link" to="/libros">Libros</Link>
        <Link className="header__link" to="/checkout">Carrito</Link>
      </nav>
    </header>
  );
};

export default Header;
