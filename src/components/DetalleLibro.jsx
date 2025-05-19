import { useLocation } from 'react-router-dom';
import logo from '../assets/rdp-logo.png';
import useCart from '../hooks/useCart.jsx';
import '../styles/detallelibro.css';
import '../styles/libro.css';

const DetalleLibro = () => {
  const { addToCart } = useCart();
  const { state: libro } = useLocation(); 

  const addToCartBook = () => {
    const confirm = window.confirm(`¿Estás seguro que quieres agregar "${libro.name}" al carrito de compras?`);
    if (confirm) {
      addToCart(libro);
      console.log("Agregado al carrito:", libro);
    } else {
      console.log("Cancelado");
    }
  };


  if (!libro) return <p>No hay datos del libro.</p>;
  return (
    <div className="book-detail">
<img className="book-detail__image" src={logo} alt={libro.name} />
    <div className="book-detail__info">
    <h2 className="movie__title">{libro.name}</h2>
    <p><strong>Autor:</strong> {libro.author}</p>
    <p><strong>Resumen:</strong> {libro.summary}</p>
    <p><strong>Año:</strong> {libro.year}</p>
    <p><strong>Precio:</strong> ${libro.price}</p>
    <button className="book__add-to-cart" onClick={addToCartBook}>
      AGREGAR 🛒
    </button>
  </div>
</div>

  );
};

export default DetalleLibro;
