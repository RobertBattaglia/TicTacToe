import React, { Component } from 'react';
import Board from './Board.jsx';
import Status from './Status.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStatus: 'ongoing',
      victor: null
    };
    this.setGameStatus = this.setGameStatus.bind(this);
    this.setVictor = this.setVictor.bind(this);
  }

  setGameStatus(gameStatus) {
    this.setState({ gameStatus });
  }

  setVictor(victor) {
    this.setState({ victor });
    this.setGameStatus('victory');
  }

  render() {
    return (
      <div
        style={{
          margin: '0 auto',
          maxWidth: '580px',
          textAlign: 'center',
          fontFamily: 'arial'
        }}
      >
        <h1>Tic Tac Toe Fo Sho</h1>
        <Status victor={this.state.victor} gameStatus={this.state.gameStatus} />
        <Board
          gameStatus={this.state.gameStatus}
          setGameStatus={this.setGameStatus}
          setVictor={this.setVictor}
        />
      </div>
    );
  }
}

export default App;
