import React, { Component } from 'react';

var style = {
  border: '3px solid black',
  textAlign: 'center',
  fontSize: '6em',
  cursor: 'pointer',
  width: '180px',
  height: '180px'
};

class Square extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.setSquareVal(this.props.num);
  }

  render() {
    return (
      <React.Fragment>
        <td style={style} onClick={this.handleClick}>
          {this.props.val}
        </td>
      </React.Fragment>
    );
  }
}

export default Square;
