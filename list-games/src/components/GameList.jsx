import React, { Component } from "react";
import "./GameList.css";

class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = { gamesLoaded: false, gameList: [], game: {}, filter: false };
  }

  retrieveGameList = () => {
    const url = "https://wild-games.herokuapp.com/api/v1";

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ gameList: data }));
  };

  clickGame = (gameName, gameImage, gameRating, gameId,gameScreenshots) => {
    this.setState(
      {
        game: {
          name: gameName,
          image: gameImage,
          rating: gameRating,
          id: gameId,
          screenshots: gameScreenshots
        }
      },
      () => {
        this.props.getGameClick(this.state.game);
      }
    );
  };

  bestGameFilter = () => {
    this.setState({
      filter: !this.state.filter
    });
  };

  gameList = () => {
    return this.state.gameList
      .filter(game => !this.state.filter || game.rating > 4.5)
      .map((game, index) => {
        return (
          <div
            key={index}
            className="game-line"
            onClick={() =>
              this.clickGame(
                game.name,
                game.background_image,
                game.rating,
                game.id,
                game.short_screenshots
              )
            }
          >
            <div className="game-name">{game.name}</div>
            <img src={game.background_image} />
          </div>
        );
      });
  };

  componentDidMount() {
    this.retrieveGameList();
  }

  render() {
    return (
      <div>
        <div className="best-games-lines" onClick={this.bestGameFilter}>
          {this.state.filter ? "All Games" : "Show Only the Best :)"}
        </div>
        {this.gameList()}
      </div>
    );
  }
}

export default GameList;
