import { useCartContext } from "../../context/CartContext/UseCartContext";
import "./Cart.css";

export const Cart = () => {
    const {
        cart,
        increment,
        decrement,
        removeItem,
        clearCart,
        getTotalPrice,
    } = useCartContext();

    if (!cart.length) {
        return (
            <div className="cart-wrapper">
                <h2 className="cart-title">Carrito</h2>
                <p className="cart-empty">Tu carrito está vacío</p>
            </div>
        );
    }

    return (
        <div className="cart-wrapper">
            <h2 className="cart-title">Carrito</h2>

            <div className="cart-card">
                <ul className="cart-list">
                    {cart.map((item) => (
                        <li key={item.id} className="cart-item">
                            <div className="cart-name">
                                <strong>{item.name}</strong> — ${item.price}
                            </div>

                            <div className="cart-controls">
                                <div className="cart-quantity"> 
                                <button className="qty-btn" onClick={() => decrement(item.id)}>
                                    -
                                </button>
                                <span className="qty">{item.quantity}</span>
                                <button className="qty-btn" onClick={() => increment(item.id)}>
                                    +
                                    </button>
                                </div>

                                <span className="subtotal">
                                    Subtotal: ${item.price * item.quantity}
                                </span>

                                <button
                                    className="link-remove"
                                    onClick={() => removeItem(item.id)}
                                >
                                    Quitar
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="cart-total">Total: ${getTotalPrice()}</div>

                <button className="btn-clear" onClick={clearCart}>
                    Vaciar carrito
                </button>
            </div>
        </div>
    );
};
