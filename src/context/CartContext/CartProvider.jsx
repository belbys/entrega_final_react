import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const exist = (id) => cart.some((p) => p.id === id);

    const addItem = (item, quantity = 1) => {
        if (exist(item.id)) {
            setCart((prev) =>
                prev.map((p) =>
                    p.id === item.id
                        ? { ...p, quantity: (p.quantity || 0) + quantity }
                        : p
                )
            );
        } else {
            setCart((prev) => [...prev, { ...item, quantity }]);
        }
    };

    const increment = (id) => {
        setCart((prev) =>
            prev.map((p) =>
                p.id === id ? { ...p, quantity: (p.quantity || 0) + 1 } : p
            )
        );
    };

    const decrement = (id) => {
        setCart((prev) =>
            prev.flatMap((p) => {
                if (p.id !== id) return [p];
                const nextQty = (p.quantity || 0) - 1;
                return nextQty > 0 ? [{ ...p, quantity: nextQty }] : [];
            })
        );
    };

    const removeItem = (id) => {
        setCart((prev) => prev.filter((p) => p.id !== id));
    };

    const clearCart = () => setCart([]);

    const getTotalItems = () =>
        cart.reduce((total, item) => total + (item.quantity || 0), 0);

    const getTotalPrice = () =>
        cart.reduce(
            (total, item) => total + (item.price || 0) * (item.quantity || 0),
            0
        );

    const values = {
        cart,
        addItem,
        increment,
        decrement,
        removeItem,
        clearCart,
        getTotalItems,
        getTotalPrice,
    };

    return (
        <CartContext.Provider value={values}>{children}</CartContext.Provider>
    );
};
