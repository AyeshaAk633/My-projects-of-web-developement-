import React from "react";
import "./App.css";

import { BrowserRouter , Routes , Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Products from "./Product";
import Cart from "./Cart";
import CartProvider from "./CartContext";
import ProductDetails from "./ProductDetails";


function App(){
    return(

        <BrowserRouter>
        <CartProvider>
        <Navbar />
        
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
        </CartProvider>

        </BrowserRouter>
    )
        
    
}
export default App;