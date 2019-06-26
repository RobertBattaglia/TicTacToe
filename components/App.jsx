import React, { Component } from 'react';
import Board from './Board.jsx';
import Reset from '../img/reset.png';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Tic Tac Toe Fo Sho</h1>
        <img src={Reset} />
        <Board />
      </React.Fragment>
    );
  }
}

export default App;
