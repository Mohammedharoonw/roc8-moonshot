import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";
import ProductListing from "./components/ProductListing";
import CartPage from "./components/CartPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
    return(
        <Provider store={store}>
            <Navbar/>
            <Outlet/>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '/',
                element: <ProductListing/>,
            },
            {
                path: '/products/:id',
                element: <ProductDetail/>,
            },
            {
                path: '/cart',
                element: <CartPage/>,
            },
        ]
    }
]);



root.render(<RouterProvider router={appRouter}/>)