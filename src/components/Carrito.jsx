import useCart from '../hooks/useCart';

const Carrito = () => {
  const { cart, removeFromCart } = useCart();

  const removeToCartBook = (libro) => {
 const confirm = window.confirm(`¿Estás seguro que quieres Eliminar "${libro.name}" al carrito de compras?`);
  if (confirm) {
    removeFromCart(libro.id)
    console.log("Eliminado del carrito:", libro);
  } else {
    console.log("Cancelado");
  }
};

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (<p>El carrito está vacío.</p>) : (
        <ul>
          {cart.map((item) => (
            <div className='book'>
              <h3>{item.name}</h3>
                    <p><strong>Autor:</strong> {item.author}</p>
                    <p><strong>Precio:</strong> ${item.price}</p>
                    <button  className="book__add-to-cart"
                    onClick={() => removeToCartBook(item)}>Eliminar 🛒
                    </button>
            </div>   
          ))}
        </ul>
      )}
    <p><strong>Total:</strong> ${cart.reduce((acc, item) => acc + item.price, 0)}</p>
    <button  className="book__add-to-cart">Pagar 🛒 </button>
    </div>
  );
};

export default Carrito;
