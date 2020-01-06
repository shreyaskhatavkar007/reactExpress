import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.currentGame = {};
      }
      
    createGames() {
        let columns = [];
        for (let i = 0; i < this.props.allGames.length; i++) {
            var newClass = this.props.searchedGames.includes('undefined') ? '' : ' hidden';
            if (!this.props.searchedGames.includes('undefined') && this.props.searchedGames.length > 0) {
              newClass = (this.props.searchedGames.includes(i)) ? '' : ' hidden';
            }
            columns.push(
            <tc key = {this.props.allGames[i].mid} 
                className = {"singlegame" + newClass}>
                <Link to={{
                    pathname: '/popup',
                    params: {
                        game: this.props.allGames[i]
                    }
                }}>
                    <td key = {this.props.allGames[i].mid}> {this.props.allGames[i].gameName} </td>
                </Link>
            </tc>
            )
        }
        return columns;
    }

    handleClick (game) {
        this.currentGame = game;
    }

    render() {
        return(
            <div>
                <table className = "gamestable">
                    <tbody>
                        {this.createGames()}
                    </tbody>
                </table>
            </div>
        );  
    }
}

export default Game;
