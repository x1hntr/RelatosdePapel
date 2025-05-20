import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import portada from '../assets/portada.png';
import Buscador from '../components/Buscador';
import '../styles/libro.css';

const Libro = ({ libros }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const abrirDetalles = (libro) => {
    navigate(`/libro/${libro.id}`, { state: libro });
  };

  const busquedaLibro = (e) => {
    setSearchTerm(e.target.value);
  };

  const librosFiltrados = libros.filter((libro) =>
    libro.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="book-list">
      <Buscador value={searchTerm} onChange={busquedaLibro} />
      {librosFiltrados.length > 0 ? (
        librosFiltrados.map((libro) => (
          <div key={libro.id} className="book-detail">
            <img className="book-detail__image" src={portada} alt={libro.name} />
            <div className="book-detail__info">
              <h2 className="movie__title">{libro.name}</h2>
              <p><strong>Autor:</strong> {libro.author}</p>
              <p><strong>Año:</strong> {libro.year}</p>
              <p><strong>Precio:</strong> ${libro.price}</p>
              <button className="book__detail" onClick={() => abrirDetalles(libro)}>
                Detalles 🔍
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="book-list__empty">No se encontraron libros con ese nombre.</p>
      )}
    </div>
  );
};

export default Libro;
