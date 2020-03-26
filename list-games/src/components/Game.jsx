import React, { Component } from "react";
import "./Game.css";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let props = this.props;
    return props.gameChosen ? (
      <div className="game-click">
        <div className="game-title">{props.gameName}</div>
        <img class="game-image" src={props.gameImage} />
        <div className="game-rating">
          Rating : <span>{props.gameRating}</span>
        </div>

        <button onClick={props.resetChoice}>Reset your choice</button>
      </div>
    ) : (
      <div>Choose your Game</div>
    );
  }
}
export default Game;
