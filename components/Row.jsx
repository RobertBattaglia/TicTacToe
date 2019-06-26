import React from 'react';
import Square from './Square.jsx';

const Row = props => {
  return (
    <React.Fragment>
      <tr>
        <Square
          num={props.rowNum * 3}
          val={props.squareVals[0]}
          setSquareVal={props.setSquareVal}
        />
        <Square
          num={props.rowNum * 3 + 1}
          val={props.squareVals[1]}
          setSquareVal={props.setSquareVal}
        />
        <Square
          num={props.rowNum * 3 + 2}
          val={props.squareVals[2]}
          setSquareVal={props.setSquareVal}
        />
      </tr>
    </React.Fragment>
  );
};

export default Row;
