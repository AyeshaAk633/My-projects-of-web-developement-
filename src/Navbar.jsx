import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return(
        <nav>
            <h2>Smart Home IoT Store </h2>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart">Cart</Link>
            </div>

        </nav>
    )
}
export default Navbar;