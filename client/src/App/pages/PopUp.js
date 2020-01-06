import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PopUp extends React.Component {
  render() {
    return(
      <div>
        <Link to={'./'}>
            <div className = "popupoverlay"></div>
        </Link>
        <div className = "popupcontent">
          <p>Game Name: {this.props.location.params.game.gameName}</p>
          <p>Game Module ID: {this.props.location.params.game.mid}</p>
          <p>Game Client ID: {this.props.location.params.game.cid}</p>
        </div>
      </div>
    );  
  }
}

export default PopUp;
