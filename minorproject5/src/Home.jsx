import React from "react";
import products from "./ProductsData";
import { Link } from "react-router-dom";


function Home(){
    const featuredproducts = products.slice(0,4);

    return(
        <div>
            <h1>Welcome To Smart Home IoT Store</h1>
            <p>Explore the smart devices for modern living </p>

            <h2>Featured Products</h2>
            
            <div className="product-list">
                {featuredproducts.map((item)=>(
                    <div key={item.id} className="product-card">
                        <img src={item.image} />
                        <h3>{item.name}</h3>
                        <p>₹{item.price}</p>
                        
                        <Link to={`/products/${item.id}`}>
                        <button>View Details</button>
                        </Link>
                    </div>
                ))}
                
            </div>

        </div>
        
    )
}
export default Home;