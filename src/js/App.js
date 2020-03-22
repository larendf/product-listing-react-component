import React, { Component } from "react";
import axios from 'axios';
import SelectboxSize from './components/SelectboxSize';
import ProductListing from "./components/ProductListing";
import ErrorMessage from './components/ErrorMessage';

let INIT_STATE = [];

class App extends Component {
    componentDidMount() {
        axios.get(`https://api.jsonbin.io/b/5e7457bfc4a5cb1628677953`, {
            headers: {
               'secret-key':'$2b$10$p1ldbd6RIL1sVb4vrvt68.x/qac5cDWRtFTJvfVnoYBWFMxXsFDVG' 
            }
        })
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

    constructor() {
        super();
        this.state = {
            products: [],        
            INIT_STATE: this.products,
            serviceError: false,
        }
        this.autoChange = this.autoChange.bind(this);
        this.getSize = this.getSize.bind(this);
    }

    autoChange(event) {
        const { value } = event.target,
            products = INIT_STATE;
        if (value <= 0) {
            this.setState({products: INIT_STATE});
        } else {
            const filteredProducts = products.filter(element => element.size.includes(value));
            this.setState({ products : filteredProducts })
        }
    }

    getSize() {
        const sizeChartMap = ["XS", "S", "M", "L", "XL"];
        let uniqueSizesArray = [];
        this.state.products.forEach(product => uniqueSizesArray = [...uniqueSizesArray, ...product.size]);
        uniqueSizesArray = [...new Set([...uniqueSizesArray])];
        const serialisedSizesArray = sizeChartMap.filter(element => uniqueSizesArray.includes(element));
        return serialisedSizesArray;
    }

    render() {
        return (
            <React.Fragment>               
                <section className="component-wrapper">
                    <div className="component-wrapper-header">
                        <h2>Women's Tops</h2>
                        <SelectboxSize onChange={this.autoChange} options={this.getSize()} usedFor="selectbox-size" />
                    </div>
                    {this.state.serviceError ? 
                    <ErrorMessage status={'error'} errorMessage={"Service Error!"} /> : 
                    <ProductListing products={this.state.products} />}
                </section>
            </React.Fragment>
        )
    }

}

export default App;