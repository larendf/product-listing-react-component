import React, { Component } from "react";
import ProductTile from './ProductListingTile';

class ProductListing extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="product-wrap">
          {this.props.products.map(product => <ProductTile key={product.index} productsData={product} />)}
        </section>
      </React.Fragment>
    );
  }
}

export default ProductListing;