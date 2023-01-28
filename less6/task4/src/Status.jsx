import React, { Component } from 'react';
import IsOnline from './isOnline';

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: false,
    };
  }
  render() {
    return <IsOnline isOnline={false} />;
  }
}

export default Status;
