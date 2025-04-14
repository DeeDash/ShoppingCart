import { create } from "zustand";

export const useCartStore = create((set) => ({
    cart: [],
    updateCart: (product) =>
        set((state) => {
            let newCart = [...state.cart];
            const itemRef = newCart.find((item) => item.id === product.id);

            if (!itemRef) return;

            if (product.quantity === 0) {
                newCart = newCart.filter((item) => item.id !== product.id);
            } else itemRef.quantity = product.quantity;
            return { cart: newCart };
        }),
    addToCart: (product, quantity) =>
        set((state) => {
            let newCart = [...state.cart];
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
            return { cart: newCart };
        }),
}));
