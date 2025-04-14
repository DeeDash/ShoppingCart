import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Collections from "./pages/Collections.jsx";
import Cart from "./pages/Cart.jsx";
import ProductProvider from "./context/ProductContext.jsx";
import Overlay from "./sections/Overlay.jsx";

import "./main.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Overlay>
                <Home />
            </Overlay>
        ),
    },
    {
        path: "collections",
        element: (
            <Overlay>
                <Collections />
            </Overlay>
        ),
    },
    {
        path: "cart",
        element: (
            <Overlay>
                <Cart />
            </Overlay>
        ),
    },
]);

createRoot(document.getElementById("root")).render(
    <ProductProvider>
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>
    </ProductProvider>
);
