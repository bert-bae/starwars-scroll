import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hello world!</h1>
        <p>hello</p>
      </div>
    )
  }
}

export default hot(module)(App);