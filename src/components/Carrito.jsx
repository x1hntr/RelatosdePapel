import { useNavigate } from 'react-router-dom';
import useCart from '../hooks/useCart';

import '../styles/carrito.css';

const Carrito = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const removeToCartBook = (libro) => {
    const confirm = window.confirm(`¿Estás seguro que quieres eliminar "${libro.name}" del carrito?`);
    if (confirm) {
      removeFromCart(libro.id);
      console.log("Eliminado del carrito:", libro);
    } else {
      console.log("Cancelado");
    }
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);
 const goToCheckout = () => {
    if (cart.length === 0) {
      alert('El carrito está vacío.');
      return;
    }
    console.log('Ir al checkout');
    navigate('/checkout');
  }
  return (
    <aside className="cart">
      <h2>🛒 Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <div className="cart__items">
            {cart.map((item) => (
              <div className="book" key={item.id}>
                <h3>{item.name}</h3>
                <p><strong>Autor:</strong> {item.author}</p>
                <p><strong>Precio:</strong> ${item.price}</p>
                <button
                  className="book__remove"
                  onClick={() => removeToCartBook(item)}
                >
                  Eliminar 🗑️
                </button>
              </div>
            ))}
          </div>

          <div className="cart__footer">
            <p><strong>Total:</strong> ${total}</p>
            <button className="book__add-to-cart" onClick={goToCheckout}>
              Pagar 💰
            </button>
            <button className="book__remove" onClick={clearCart}>Vaciar 🧹</button>
          </div>
        </>
      )}
    </aside>
  );
};

export default Carrito;
