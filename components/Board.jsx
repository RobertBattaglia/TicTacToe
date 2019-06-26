import React, { Component } from 'react';
import Row from './Row.jsx';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = { squares: Array(9).fill(null), nextVal: 'X' };
    this.updateNextVal = this.updateNextVal.bind(this);
    this.setSquareVal = this.setSquareVal.bind(this);
  }

  updateNextVal() {
    var nextVal = this.state.nextVal === 'X' ? 'O' : 'X';
    this.setState({ nextVal });
  }

  setSquareVal(n) {
    var newSquares = this.state.squares.slice();
    newSquares[n] = this.state.nextVal;
    this.setState({ squares: newSquares });
    this.updateNextVal();
  }

  render() {
    return (
      <React.Fragment>
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
