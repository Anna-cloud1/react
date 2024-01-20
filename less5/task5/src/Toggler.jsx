import React, { Component } from 'react';
import './index.scss';


class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonState: 'Off',
    };
  }

  stateOn() {
    this.setState({
      buttonState: 'On',
    });
  }

  stateOff() {
    this.setState({
      buttonState: 'Off',
    });
  }

  stateChanger() {
    if (this.state.buttonState === 'Off') {
      this.stateOn();
    } else this.stateOff();
  }

  render() {
   return <div className="toggler" onClick={() => this.stateChanger()}>
      {this.state.buttonState}
    </div>;
  }
}

export default Toggler;
