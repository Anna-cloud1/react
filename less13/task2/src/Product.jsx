import React from 'react';
import { Link } from 'react-router-dom';

function Product({ match }) {
  return <div className="product">
    { match.params.productId}
  </div>;
}

export default Product;
