import React, { Component } from 'react';
import Game from './Game';

class Games extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getList = () => {
    fetch('/api/getList')
    .then(res => res.json())
    .then(list => this.setState( list ))
  }
  
  componentDidMount() {
    this.getList();
  }

  handleClick (game) {
    this.setState({
      selectedGame: game
    });
  }

  handleChange(event) {
    this.state.searchedGames = this.state.allGames.slice();
    const foundGamesIndex = this.searchGames(this.state.searchedGames, event.target.value);
    if (foundGamesIndex) {
      this.setState({
        searchedGames: foundGamesIndex
      });
    }
  }

  searchGames(allGames, searchString) {
    const string = searchString;
    const arr = [];
    allGames.forEach((currentValue, index) => {
      if (currentValue.gameName.includes(string) || currentValue.mid.includes(string) || currentValue.cid.includes(string)) {
        arr.push(index);
      }
    });
    return arr;
  }

  render() {
    return (
        <div>
            { this.state.allGames ? (
                    <div className="allgames">
                        <div className = "searchbar">
                            <span>Search Game</span>
                            <input type="text" onChange = {(e) => this.handleChange(e)} />
                        </div>
                        <Game allGames = {this.state.allGames} searchedGames = {this.state.searchedGames}
                            onClick={i => this.handleClick(i)}
                        />
                    </div>
            ) : (
                <div>
                    <h2>No Games Found</h2>
                </div>
            )
            }
        </div>
    );
  }
}

export default Games;
