import React from "react";
import { Route } from "react-router-dom";

import ProductList from "../../components/product-list/product-list.component";
import ProductDetail from "../../components/product-details/product-detail.component";

const ProductPage = ({ match }) => {
  return (
    <div className="product-page">
      <Route exact path={`${match.path}`} component={ProductList} />
      <Route path={`${match.path}/:productId`} component={ProductDetail} />
    </div>
  );
};

export default ProductPage;
