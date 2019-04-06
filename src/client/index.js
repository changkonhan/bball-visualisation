import React, { Component } from "react";
import { render } from "react-dom";
import { getTeamShotChart } from "./services/NbaStats";

class App extends Component {

    constructor(props) {
        super(props);
        this.state= {
            data: "Hello World!"
        };
    }

    componentDidMount() {
        this.setState({
            data: getTeamShotChart("Boston Celtics")
        });
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