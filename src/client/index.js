import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {

    constructor(props) {
        super(props);
        this.state= {
            data: "Hello World!"
        };
    }

    render() {

        return (
            <div>{this.state.data}</div>
        );
    }
}

render(
    <App />,
    document.getElementById("app")
);