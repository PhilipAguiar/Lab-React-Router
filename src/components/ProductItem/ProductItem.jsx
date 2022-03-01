import React from "react";
import productItems from "../../data/products.json";
import { Route, Link } from "react-router-dom";
import TechnicalSpecs from "../TechnicalSpecs/TechnicalSpecs";

function ProductItem(props) {
  const { match } = props;

  const product = productItems.find((product) => {
    return product.id === props.match.params.id;
  });

  return (
    <>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{`Product ID: ${product.id}`}</p>
      <p>{`Category: ${product.category}`}</p>

      <p>
        <Link to={`${match.url}/specs`}>Tech Specs</Link>
      </p>

      <Route path={`/product/:id/specs`} render={() => <TechnicalSpecs product={product} />} />
    </>
  );
}

export default ProductItem;
