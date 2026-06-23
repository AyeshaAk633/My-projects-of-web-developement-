import {useContext} from "react";
import { CartContext } from "./CartContext";


function Cart(){
    const {cart, removeFromCart} = useContext(CartContext);

    if(cart.length === 0){
    return (
        <div>
            <h1>🛒Cart</h1>
            <p>Your cart is empty</p>
        </div>
    )
    }

    return(
        <div>
            <h1>Cart</h1>
            <div className="product-list">
                {cart.map((item)=>(
                    <div key={item.id} className="product-card">
                        <img src={item.image} />
                        <h2>{item.name}</h2>
                        <p>{item.category}</p>
                        <p>${item.price}</p>
                        <button onClick={()=> removeFromCart(item.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Cart;