import React, { Component } from 'react';
import Row from './Row.jsx';
import Reset from '../img/reset.png';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      nextVal: 'X',
      gameStatus: 'ongoing'
    };
    this.updateNextVal = this.updateNextVal.bind(this);
    this.setSquareVal = this.setSquareVal.bind(this);
    this.checkForVictory = this.checkForVictory.bind(this);
    this.checkForDraw = this.checkForDraw.bind(this);
    this.resetBoard = this.resetBoard.bind(this);
  }

  checkForVictory() {
    var sqrs = this.state.squares;
    for (let i = 0; i < 3; i++) {
      if (sqrs[i] && sqrs[i] === sqrs[i + 1] && sqrs[i] === sqrs[i + 2]) {
        this.setState({ gameStatus: 'victory' });
        return;
      }
    }
    for (let i = 0; i < 9; i += 3) {
      if (sqrs[i] && sqrs[i] === sqrs[i + 3] && sqrs[i] === sqrs[i + 6]) {
        this.setState({ gameStatus: 'victory' });
        return;
      }
    }
    if (sqrs[0] && sqrs[0] === sqrs[4] && sqrs[0] === sqrs[8]) {
      this.setState({ gameStatus: 'victory' });
      return;
    }
    if (sqrs[2] && sqrs[2] === sqrs[4] && sqrs[2] === sqrs[6]) {
      this.setState({ gameStatus: 'victory' });
      return;
    }
  }

  checkForDraw() {
    if (!this.state.squares.includes(null)) {
      this.setState({ gameStatus: 'Draw' });
    }
  }

  updateNextVal() {
    var nextVal = this.state.nextVal === 'X' ? 'O' : 'X';
    this.setState({ nextVal });
  }

  setSquareVal(n) {
    var newSquares = this.state.squares.slice();
    newSquares[n] = this.state.nextVal;
    this.setState({ squares: newSquares }, () => {
      this.checkForVictory();
      if (this.state.gameStatus === 'ongoing') {
        this.checkForDraw();
        this.updateNextVal();
      }
    });
  }

  resetBoard() {
    this.setState({
      squares: Array(9).fill(null),
      nextVal: 'X',
      gameStatus: 'ongoing'
    });
  }

  render() {
    return (
      <React.Fragment>
        <img src={Reset} onClick={this.resetBoard} />
        <table>
          <tbody>
            <Row
              rowNum={0}
              squareVals={this.state.squares.slice(0, 3)}
              setSquareVal={this.setSquareVal}
            />
            <Row
              rowNum={1}
              squareVals={this.state.squares.slice(3, 6)}
              setSquareVal={this.setSquareVal}
            />
            <Row
              rowNum={2}
              squareVals={this.state.squares.slice(6)}
              setSquareVal={this.setSquareVal}
            />
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Board;
