import useCart from '../hooks/useCart';
import '../styles/checkout.css';
const CheckOut = () => {
  const { cart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  console.log(total)
  return (
    // <aside className="cart">
    //   <h2>CheckOut</h2>

    //   {cart.length === 0 ? (
    //     <p>El carrito está vacío.</p>
    //   ) : (
    //     <>
    //       <div className="cart__items">
    //         {cart.map((item) => (
    //           <div className="book" key={item.id}>
    //             <h3>{item.name}</h3>
    //           </div>
    //         ))}
    //       </div>
    //       <div className="cart__footer">
    //         <p><strong>Total:</strong> ${total.toFixed(2)}</p>
    //         <button className="book__add-to-cart">Pagar 💰</button>
    //       </div>
    //     </>
    //   )}
    // </aside>

    <div className="login">
            <h2 className="login__title">PAGO</h2>
            <form className="checkout">
                <div className="login__form-group">
                    <label htmlFor="username" className="login__label">Nombre Tarjeta credito</label>
                    <input
                        type="text"
                        id="username"
                        className="login__input"
                        required
                    />
                </div>    
                <div className="login__form-group">
                    <label htmlFor="username" className="login__label">Numero tarjeta</label>
                    <input
                        type="text"
                        id="username"
                        className="login__input"
                        required
                    />
                </div>      
                <div className="login__form-group">
                    <label htmlFor="username" className="login__label">Fecha Expiracion</label>
                    <input
                        type="text"
                        id="username"
                        className="login__input"
                        required
                    />
                    <label htmlFor="username" className="login__label">CVV</label>
                    <input
                        type="text"
                        id="username"
                        className="login__input"
                        required
                    />
                </div> 
                <div className="cart__footer">
                    <p><strong>SubTotal:</strong> ${total.toFixed(2)}</p>
                    <p><strong>Imp:</strong> ${(total*0.15).toFixed(2)}</p>
                    <p><strong>Shiping:</strong> $2.5</p>
                    <p><strong>Total:</strong> ${(total + total*0.15 + 2.5).toFixed(2)}</p>
                </div>   
                <button className="book__add-to-cart">
              Pagar 💰
            </button>   
            </form>

        </div>

  );
};

export default CheckOut;
