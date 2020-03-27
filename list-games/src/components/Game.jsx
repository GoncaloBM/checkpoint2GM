import React, { Component } from "react";
import "./Game.css";
import { Link } from "react-router-dom";

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
        <img className="game-image" src={props.gameImage} />
        <div className="game-rating">
          Rating : <span>{props.gameRating}</span>
        </div>
        <button>
          <Link
            to={{
              pathname: `/screenshots/${props.gameId}`,
              state: { screenshots: props.gameScreenshot }
            }}
          >
            ScreenShots
          </Link>
        </button>
        <button onClick={props.resetChoice}>Reset your choice</button>
      </div>
    ) : (
      <div>Choose your Game</div>
    );
  }
}
export default Game;
