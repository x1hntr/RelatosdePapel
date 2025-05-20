import { useParams } from 'react-router-dom';
import Carrito from '../components/Carrito';
import Libro from '../components/Libro';
import Sidebar from '../components/SideBar';
import useBooks from '../hooks/useBooks';
import '../styles/home.css';

const Home = () => {
    const { categoria } = useParams();
    const categoriaSeleccionada = categoria || 'aventura';
    const { books, loading } = useBooks(categoriaSeleccionada);

    return (
        <div className="home-page">
            <Sidebar />
            <main className="home-page__content">
                <h1>{categoria ? `Categoría: ${categoria}` : 'Recomendaciones:'}</h1>
                {loading ? (
                    <p>Cargando libros...</p>
                ) : (
                    <Libro className="libro__imagen" libros={books} />
                )}
            </main>
            <Carrito />
        </div>
    );
};

export default Home;
