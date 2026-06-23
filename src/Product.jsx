import products from "./ProductsData";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div>
      <h1>Products</h1>

      <div className="product-list">
        {products.map((item) => (
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
  );
}

export default Product;