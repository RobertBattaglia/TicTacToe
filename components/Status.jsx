import React from 'react';

const Status = props => {
  if (props.victor) {
    return (
      <React.Fragment>
        <h3>{props.victor} Wins!</h3>
      </React.Fragment>
    );
  } else if (props.gameStatus === 'draw') {
    return (
      <React.Fragment>
        <h3>Draw</h3>
      </React.Fragment>
    );
  } else {
    return <React.Fragment />;
  }
};

export default Status;
