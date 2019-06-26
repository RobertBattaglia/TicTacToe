import React, { Component } from 'react';
import Board from './Board.jsx';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Tic Tac Toe Fo Sho</h1>
        <Board />
      </React.Fragment>
    );
  }
}

export default App;
