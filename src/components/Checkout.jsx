import { useNavigate } from 'react-router-dom';
import useCart from '../hooks/useCart';
import '../styles/checkout.css';
import DetalleCompra from './detalleCompra';
const CheckOut = () => {
const {clearCart } = useCart();
const navigate = useNavigate();

const paidBooks = () => {
    clearCart();
    navigate('/home')

  };
  return (
    <div className="checkout">
            <h2 className="checkout___title ">PAGO</h2>
            <form className="checkout__form">
                <div className="checkout__form-group">
                    <label htmlFor="username" className="checkout__label">Nombre Tarjeta credito</label>
                    <input
                        type="text"
                        id="username"
                        className="checkout__input"
                        defaultValue="Juan Pérez"
                        required
                    />
                </div>    
                <div className="checkout__form-group">
                    <label htmlFor="username" className="checkout__label">Numero tarjeta</label>
                    <input
                        type="text"
                        id="username"
                        className="checkout__input"
                        defaultValue="1234-5678-9012-3456"
                        required
                    />
                </div>      
                <div className="checkout__form-group">
                    <label htmlFor="username" className="checkout__label">Fecha Expiracion</label>
                    <input
                        type="text"
                        id="username"
                        className="checkout__input"
                        defaultValue="11/28"
                        required
                    />
                    <label htmlFor="username" className="checkout__label">CVV</label>
                    <input
                        type="text"
                        id="username"
                        className="checkout__input"
                        defaultValue="123"
                        required
                    />
                </div> 
                <DetalleCompra/>
                <button className="book__add-to-cart"  onClick={paidBooks}>Pagar 💰</button>
            </form>

        </div>

  );
};

export default CheckOut;
