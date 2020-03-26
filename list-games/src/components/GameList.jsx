import React, { Component } from "react";
import './GameList.css'

class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = { gamesLoaded: false, gameList: [] };
  }

  retrieveGameList = () => {
    const url = "https://wild-games.herokuapp.com/api/v1";

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ gameList: data }));
  };

  componentDidMount() {
    this.retrieveGameList();
  }

  render() {
    return this.state.gameList.map((game, index) => {
      return (
        <div key={index} className="game-line">
            <div className='game-name'>{game.name}</div>
            <img src={game.background_image}/>
        </div>
      );
    });
  }
}

export default GameList;
