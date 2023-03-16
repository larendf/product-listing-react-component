import React, { Component } from "react";
import axios from 'axios';
import ProductListing from "./components/ProductListing/ProductListing";
import MessageBox from './components/MessageBox/MessageBox';
import SelectBox from './components/SelectBox/SelectBox';


let INITIAL_STATE = [];
class App extends Component {
    constructor() {
        super();

        this.state = {
            products: [],
            serviceError: false,
            selectedSize: "",
            initial_state: this.products
        }
        this.handleChange = this.handleChange.bind(this);
        this.getSizes = this.getSizes.bind(this);
    }

    componentDidMount() {
        axios.get(`https://raw.githubusercontent.com/larendf/product-listing-react-component/master/src/products.json`)
        .then(
            res => {
                const products = res.data;
                this.setState({ products });
                this.getSize();
                INIT_STATE = products;
            },
            error => {
                this.setState({ serviceError: true });
            }
        );
    }

    getSizes() {
        const sizeChartMap = ["XXS","XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL", "XXXXL", "XXXXXL"];
        let uniqueSizesArray = [];
        this.state.products.forEach(product => uniqueSizesArray = [...uniqueSizesArray, ...product.size]);
        uniqueSizesArray = [...new Set([...uniqueSizesArray])];
        const serialisedSizesArray = sizeChartMap.filter(element => uniqueSizesArray.includes(element));
        return serialisedSizesArray;
    }

    handleChange(e) {
        const { value } = e.target,
            products = INITIAL_STATE;
        if (value <= 0) {
            this.setState({products: INITIAL_STATE});
        } else {
            const filteredProducts = products.filter(element => element.size.includes(value));
            this.setState({ products : filteredProducts })
        }
    }
    render() {
        return (
            <React.Fragment>
                <main id="app-wrapper">
                    <div id="section-header">
                        <h2>Women's tops</h2>
                        <SelectBox onChange={this.handleChange} options={this.getSizes()} usedFor="sizeFilter" />
                    </div>
                    {this.state.serviceError ? <MessageBox status={'error'} message={"Error messaage!"} /> : <ProductListing products={this.state.products} />}
                </main>
            </React.Fragment>
        )
    }
}

export default App;
