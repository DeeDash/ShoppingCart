import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    error: null,
    fetchProducts: async () => {
        set({ error: null });
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            set({ products: data });
            console.log("fetched data");
        } catch (err) {
            set({ error: err });
        }
    },
}));
