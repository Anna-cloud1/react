import React, { Component } from 'react';
import './index.scss';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Off',
    };
  }

  stateOn() {
    this.setState({
      text: 'On',
    });
  }
  stateOff() {
    this.setState({
      text: 'Off',
    });
  }

  onChangeText() {
    if (this.state.text === 'Off') {
      this.stateOn();
    } else this.stateOff();
  }

  render() {
    return (
      <div className="toggler" onClick={() => this.onChangeText()}>
        {this.state.text}
      </div>
    );
  }
}

export default Toggler;
