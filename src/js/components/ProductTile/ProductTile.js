import React, { Component } from "react";
import Image from '../Image/Image';
import Badge from '../Badge/Badge';

class ProductTile extends Component {
    render() {
        const prdctData = this.props.productData;
        return (
            <div className="product-tile">
                <Image imageName={ prdctData.productImage } imageAlt={ prdctData.productName } />
                { prdctData.isSale ? <Badge type={"sale"} label={"Sale"} /> : "" }
                { prdctData.isExclusive ? <Badge type={"exclusive"} label={"Exclusive"} /> : "" }
                <div>
                    <h3>{ prdctData.productName }</h3>
                    <h3 className="cost">{ prdctData.price }</h3>
                </div>
            </div>
        )
    }
};

export default ProductTile;