import { Link } from "react-router-dom";
import '../styles/sidebar.css'; // Asegúrate de tener este archivo CSS
import Buscador from "./Buscador";
const SideBar = () => {

    const categorias = ['Aventura', 'Ciencia Ficción', 'Fantasia', 'Horror', 'Romance'];
    return (
        <div className="home-page">
            <aside className="sidebar">
                <Buscador />
                <h2 className="sidebar__title">Categorias:</h2>
                <nav className="sidebar__menu">
                    {categorias.map((categoria) => (
                        <Link key={categoria} to={`/cines/${categoria}`} className="sidebar__link">
                            {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                        </Link>
                    ))}
                </nav>
            </aside>
        </div>
    );
};

export default SideBar;