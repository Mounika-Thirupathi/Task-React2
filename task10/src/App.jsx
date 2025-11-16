import { Component } from "react";

export class App extends Component {

    constructor() {
        super();
        this.state = { products: [] };
        console.log("Constructor Method");
    }

    fetchProduct() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(res => this.setState({ products: res }))
            .catch(err => console.log(err));
    }

    componentDidMount() {
        console.log("Component Did Mount Method");
        this.fetchProduct();
    }

    render() {
        console.log("Render Method");

        return (
            <div>
                <h1>Class Component Life Cycle Methods</h1>

                {this.state.products.map(ele => (
                    <div
                        key={ele.id}
                        style={{
                            border: "1px solid black",
                            margin: "10px",
                            padding: "10px"
                        }}
                    >
                        <p>{ele.username}</p>
                    </div>
                ))}
            </div>
        );
    }
}








import axios from "axios";
export class Apps extends Component {

    constructor() {
        super();
        this.state = { users: [] };
        console.log("Constructor Method");
    }

    fetchProducts() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => this.setState({ users: res.data }))
        .catch(err => console.log(err));
    }

    componentDidMount() {
        console.log("Component Did Mount Method");
        this.fetchProducts();
    }

    render() {
        console.log("Render Method");

        return (
            <div>
                <h1>Class Component Life Cycle Methods</h1>

                {this.state.users.length === 0 ? (
                    <h3>Loading....</h3>
                ) : (
                    this.state.users.map(ele => (
                        <div
                            key={ele.id}
                            style={{
                                border: "1px solid black",
                                margin: "10px",
                                padding: "10px"
                            }}
                        >
                            <p>{ele.title}</p>
                        </div>
                    ))
                )}
            </div>
        );
    }
}
