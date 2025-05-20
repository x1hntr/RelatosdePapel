import { Link } from "react-router-dom";


import '../styles/sidebar.css';

const SideBar = () => {
    const categorias = [
        { nombre: 'Aventura', ruta: 'aventura' },
        { nombre: 'Ciencia Ficción', ruta: 'csifi' },
        { nombre: 'Fantasia', ruta: 'fantasia' },
        { nombre: 'Horror', ruta: 'horror' },
        { nombre: 'Romance', ruta: 'romance' }
    ];

    return (
        <div className="home-page">
            <aside className="sidebar">
                <h2 className="sidebar__title">Categorías:</h2>
                <nav className="sidebar__menu">
                    {categorias.map((categoria) => (
                        <Link key={categoria.ruta} to={`/category/${categoria.ruta}`} className="sidebar__link">
                            {categoria.nombre}
                        </Link>
                    ))}
                </nav>
            </aside>
        </div>
    );
};

export default SideBar;
