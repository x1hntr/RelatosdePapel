
import useCart from '../hooks/useCart';
import '../styles/checkout.css';

const DetalleCompra = () => {
const { cart } = useCart();
const total = cart.reduce((acc, item) => acc + item.price, 0);


  return (
                <div className="cart__footer">
                    <div className="cart__row">
                        <strong>SubTotal:</strong><span>${total.toFixed(2)}</span>
                    </div>
                    <div className="cart__row">
                        <strong>Imp:</strong><span>${(total * 0.15).toFixed(2)}</span>
                    </div>
                    <div className="cart__row">
                        <strong>Shipping:</strong><span>$2.50</span>
                    </div>
                    <div className="cart__row">
                        <strong>Total:</strong><span>${(total + total * 0.15 + 2.50).toFixed(2)}</span>
                    </div>
                </div>
  );
};

export default DetalleCompra;
