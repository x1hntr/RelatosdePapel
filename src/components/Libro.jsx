import { Link } from 'react-router-dom';
import useCart from '../hooks/useCart.jsx';

import '../styles/libro.css';

const Libro = ({ libros }) => {
const { addToCart } = useCart();

const addToCartBook = (libro) => {
 const confirm = window.confirm(`¿Estás seguro que quieres agregar "${libro.name}" al carrito de compras?`);
  if (confirm) {
    addToCart(libro)
    console.log("Agregado al carrito:", libro);
  } else {
    console.log("Cancelado");
  }
};
    return (
      <div>
        {libros.map((libro) => (
          <div key={libro.id} className="book">
            <h2 className="movie__title">
                <Link to={`/cines/${libro}/movie/${libro.id}`} className="movie__link">
                    {libro.name}
                </Link>
            </h2>
            <p><strong>Autor:</strong> {libro.author}</p>
            <p><strong>Precio:</strong> ${libro.price}</p>
            <button  className="book__add-to-cart"
            onClick={() => addToCartBook(libro)}>Detalles 🛒 
            </button>
            <button  className="book__add-to-cart"
            onClick={() => addToCartBook(libro)}>AGREGAR 🛒
            </button>
          </div>
        ))}
      </div>
    );
    
};



export default Libro;

