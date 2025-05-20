import { useNavigate } from 'react-router-dom';
import portada from '../assets/portada.png';
import useCart from '../hooks/useCart.jsx';
import '../styles/libro.css';

const Libro = ({ libros }) => {
const { addToCart } = useCart();
  const navigate = useNavigate();

const addToCartBook = (libro) => {
 const confirm = window.confirm(`¿Estás seguro que quieres agregar "${libro.name}" al carrito de compras?`);
  if (confirm) {
    addToCart(libro)
    console.log("Agregado al carrito:", libro);
  } else {
    console.log("Cancelado");
  }

};
const abrirDetalles = (libro) => {
navigate(`/libro/${libro.id}`, { state: libro });  };
  
    return (
     <div className="book-list">
  {libros.map((libro) => (
    <div key={libro.id} className="book-detail">
      <img className="book-detail__image" src={portada} alt={libro.name} />
      <div className="book-detail__info">
        <h2 className="movie__title">{libro.name}</h2>
        <p><strong>Autor:</strong> {libro.author}</p>
        <p><strong>Año:</strong> {libro.year}</p>
        <p><strong>Precio:</strong> ${libro.price}</p>
        <button
          className="book__detail"
          onClick={() => abrirDetalles(libro)}
        >
          Detalles 🔍
        </button>
        <button
          className="book__add-to-cart"
          onClick={() => addToCartBook(libro)}
        >
          AGREGAR 🛒
        </button>
      </div>
    </div>
  ))}
</div>

    );
    
};



export default Libro;

