import { createContext, useState, useCallback } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = useCallback(
        (product, quantity) => {
            let newCart = [...cart];
            const itemRef = newCart.find((item) => item.id === product.id);

            if (itemRef) {
                itemRef.quantity += quantity;
            } else {
                newCart.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    quantity: quantity,
                });
            }
            console.log(newCart);
            setCart(newCart);
        },
        [cart]
    );

    const updateCart = useCallback(
        (product) => {
            let newCart = [...cart];
            const itemRef = newCart.find((item) => item.id === product.id);

            if (!itemRef) return;

            if (product.quantity === 0) {
                newCart = newCart.filter((item) => item.id !== product.id);
            } else itemRef.quantity = product.quantity;
            console.log(newCart);
            setCart(newCart);
        },
        [cart]
    );

    return (
        <CartContext.Provider value={{ addToCart, updateCart, cart }}>
            {children}
        </CartContext.Provider>
    );
}
