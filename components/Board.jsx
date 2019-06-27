import React, { Component } from 'react';
import Row from './Row.jsx';
import { MdReplay } from 'react-icons/md';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      nextVal: 'X'
    };
    this.updateNextVal = this.updateNextVal.bind(this);
    this.setSquareVal = this.setSquareVal.bind(this);
    this.checkForVictory = this.checkForVictory.bind(this);
    this.checkForDraw = this.checkForDraw.bind(this);
    this.resetBoard = this.resetBoard.bind(this);
  }

  checkForVictory() {
    var sqrs = this.state.squares;
    for (let i = 0; i < 9; i += 3) {
      if (sqrs[i] && sqrs[i] === sqrs[i + 1] && sqrs[i] === sqrs[i + 2]) {
        this.props.setVictor(this.state.nextVal);
        return;
      }
    }
    for (let i = 0; i < 3; i++) {
      if (sqrs[i] && sqrs[i] === sqrs[i + 3] && sqrs[i] === sqrs[i + 6]) {
        this.props.setVictor(this.state.nextVal);
        return;
      }
    }
    if (sqrs[0] && sqrs[0] === sqrs[4] && sqrs[0] === sqrs[8]) {
      this.props.setVictor(this.state.nextVal);
      return;
    }
    if (sqrs[2] && sqrs[2] === sqrs[4] && sqrs[2] === sqrs[6]) {
      this.props.setVictor(this.state.nextVal);
      return;
    }
  }

  checkForDraw() {
    if (!this.state.squares.includes(null)) {
      this.props.setGameStatus('draw');
    }
  }

  updateNextVal() {
    var nextVal = this.state.nextVal === 'X' ? 'O' : 'X';
    this.setState({ nextVal });
  }

  setSquareVal(n) {
    if (!this.state.squares[n] && this.props.gameStatus === 'ongoing') {
      var newSquares = this.state.squares.slice();
      newSquares[n] = this.state.nextVal;
      this.setState({ squares: newSquares }, () => {
        this.checkForVictory();
        if (this.props.gameStatus === 'ongoing') {
          this.checkForDraw();
          this.updateNextVal();
        }
      });
    }
  }

  resetBoard() {
    this.props.setVictor(null);
    this.props.setGameStatus('ongoing');
    this.setState({
      squares: Array(9).fill(null),
      nextVal: 'X'
    });
  }
  iconSize() {
    return this.props.gameStatus === 'ongoing' ? 50 : 100;
  }
  iconColor() {
    return this.props.gameStatus === 'ongoing' ? 'black' : 'green';
  }

  render() {
    return (
      <React.Fragment>
        <MdReplay
          size={this.iconSize()}
          color={this.iconColor()}
          style={{ cursor: 'pointer' }}
          onClick={this.resetBoard}
        />
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
