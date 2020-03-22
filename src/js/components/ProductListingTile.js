import React, { Component } from "react";
import Image from './Image';
import Promo from './Promo';

class ProductListingTile extends Component {
    render() {
        const productData = this.props.productsData;
        return (
            <div className="product">
                <Image imageName={ productData.productImage } imageAlt={ productData.productName } />
                { productData.isSale ? <Promo type={"sale"} label={"Sale"} /> : "" }
                { productData.isExclusive ? <Promo type={"exclusive"} label={"Exclusive"} /> : "" }
                <div className="description">
                    <h3>{ productData.productName }</h3>
                    <h3 className="price">{ productData.price }</h3>
                </div>
            </div>
        )
    }
};

export default ProductListingTile;