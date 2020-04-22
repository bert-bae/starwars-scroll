import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './styles/App.css';
// Components
import NavigationBar from './components/navigation/navigation-bar';
import StarwarsBackground from './components/starwars-crawl/starwars-background';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <StarwarsBackground />
      </div>
    );
  }
}

export default hot(module)(App);
