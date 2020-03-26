import React, { Component } from "react";
import "./GameList.css";

class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = { gamesLoaded: false, gameList: [], game: {} };
  }

  retrieveGameList = () => {
    const url = "https://wild-games.herokuapp.com/api/v1";

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ gameList: data }));
  };

  clickGame = (gameName, gameImage, gameRating) => {
    this.setState(
      {
        game: { name: gameName, image: gameImage, rating: gameRating }
      },
      () => {
        this.props.getGameClick(this.state.game);
      }
    );
  };

  componentDidMount() {
    this.retrieveGameList();
  }

  render() {
    return this.state.gameList.map((game, index) => {
      return (
        <div
          key={index}
          className="game-line"
          onClick={() =>
            this.clickGame(game.name, game.background_image, game.rating)
          }
        >
          <div className="game-name">{game.name}</div>
          <img src={game.background_image} />
        </div>
      );
    });
  }
}

export default GameList;
