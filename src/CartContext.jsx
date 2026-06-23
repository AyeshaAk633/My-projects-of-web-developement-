import {createContext, useState} from "react";

export const CartContext = createContext();

function CartProvider({children}) {
    const [cart , setCart]= useState([]);

    const addToCart = (product)=>{
        setCart([...cart, product])
    }

    const removeFromCart = (id)=>{
        const updateCart = cart.filter((e)=> e.id !== id);
        setCart(updateCart);
    }

    return(
        <CartContext.Provider value={{ cart, addToCart, removeFromCart}}>{children}</CartContext.Provider>
    );
}
export default CartProvider;