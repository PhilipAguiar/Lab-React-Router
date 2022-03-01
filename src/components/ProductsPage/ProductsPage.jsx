import React from "react";
import { Link } from "react-router-dom";

function ProductsPage({ productItems }) {
  return (
    <section>
      <h1>Products</h1>
      <p>Check out our many products below!</p>

      <ul>
        {productItems.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`/product/${product.id}`}>{product.name}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ProductsPage;
