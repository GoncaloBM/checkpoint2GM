import React, { Component } from "react";
import GameList from "./components/GameList";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="game-list">
          <GameList />
        </div>
        <div className='game-display'></div>
      </div>
    );
  }
}

export default App;
