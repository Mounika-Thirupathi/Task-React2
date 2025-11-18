import { Component } from "react";
import axios from "axios";

export class App extends Component {
    constructor() {
        super();
        this.state = {
            productsData: [],
            filterData: [],
            category: "all",
        };
    }

    fetchProducts = () => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((res) =>
                this.setState({ productsData: res.data, filterData: res.data })
            )
            .catch((err) => console.log(err));
    };

    componentDidMount() {
        this.fetchProducts();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.category !== this.state.category) {
            const newProducts = this.state.productsData.filter((item) => {
                if (this.state.category === "all") return item;
                return item.category === this.state.category;
            });

            this.setState({ filterData: newProducts });
        }
    }

    handleSelectCategory = (event) => {
        this.setState({ category: event.target.value });
    };

    render() {
        return (
            <div>
                <h1>Filter Products</h1>

                <select onChange={this.handleSelectCategory}>
                    <option value="all">All</option>
                    <option value="men's clothing">Men's clothing</option>
                    <option value="women's clothing">Women's clothing</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                </select>

                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {this.state.filterData.map((item) => (
                        <div key={item.id} style={{ width: "15rem" }}>
                            <img src={item.image} width="120" height="100" alt="" />
                            <p>{item.category}</p>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
