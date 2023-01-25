import React, { Component } from 'react';
import './index.scss';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Off',
    };
    this.stateOn = this.stateOn.bind(this);
  }

  stateOn() {
  this.setState({
  text: 'On'
  });
  }

  render() {
    return (
      <div className="toggler" onClick={() => this.stateOn()}>
        {this.state.text}
      </div>
    );
  }
}

export default Toggler;
