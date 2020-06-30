import React, { Component } from "react";
import ProductTile from '../ProductTile/ProductTile';

class ProductListing extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="product-grid">
          {this.props.products.map(product => <ProductTile key={product.index} productData={product} />)}
        </section>
      </React.Fragment>
    );
  }
}

export default ProductListing;