import React, { Component } from "react";
import GameList from "./components/GameList";
import Game from "./components/Game";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { gameClicked: {}, gameChosen: false };
  }

  getGameClick = state => {
    this.setState({
      gameClicked: state,
      gameChosen: true
    });
  };

  resetChoice = () => {
    this.setState({
      gameClicked: {},
      gameChosen: false
    });
  };

  render() {
    return (
      <div className="App">
        <div className="game-list">
          <GameList getGameClick={this.getGameClick} />
        </div>
        <div className="game-display">
          <Game
            gameName={this.state.gameClicked.name}
            gameImage={this.state.gameClicked.image}
            gameRating={this.state.gameClicked.rating}
            gameId={this.state.gameClicked.id}
            gameScreenshot={this.state.gameClicked.screenshots}
            gameChosen={this.state.gameChosen}
            resetChoice={this.resetChoice}
          />
        </div>
      </div>
    );
  }
}

export default App;
