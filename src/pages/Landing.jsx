import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import logo from '../assets/rdp-logo.png';
import "../styles/landing.css";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/home");
    }, 5000);
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <section className="landing">:
      <h1 className="landing__titulo">Bienvenidos a</h1>
      <img src={logo} alt="Relatos de Papel" className="landing__logo-img" />
      <p className="landing__descripcion">Encuentra tus libros favoritos en nuestra tienda.</p>
      <p className="landing__descripcion">Y recibelos en la puerta de tu casa.</p>
      <button className="landing__boton" onClick={() => navigate("/home")}>
        Ir a la tienda
      </button>
    </section>
  );
};

export default Landing;
