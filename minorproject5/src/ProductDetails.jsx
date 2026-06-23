import { useParams } from "react-router-dom";
import products from "./ProductsData";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function ProductDetails(){
    const {id} = useParams();
    const {addToCart} = useContext(CartContext);
    
    const product = products.find((p)=> p.id ===Number(id));

    if(!product){
        return(
            <div>
                <h1>Product Not Found</h1>
            </div>
        );
    }

    return(
        <div> 
            <h1>Product Details Page</h1>
    
            <div className="product-details">
                <div className="product-card">
                    <img src={product.image} />
                    <h2>{product.name}</h2>
                    <p>{product.category}</p>
                    <p>{product.discription}</p>
                    <p>₹{product.price}</p>
                    <button onClick={()=> addToCart(product)}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default ProductDetails;