import React, { Component } from "react";
import { hot } from "react-hot-loader";

// Components
import StarwarsBackground from './components/starwars-crawl/starwars-background'

class App extends Component {
  render() {
    return (
      <div className="App">
        <StarwarsBackground/>
      </div>
    )
  }
}

export default hot(module)(App);