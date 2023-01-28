import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: true,
    };
  }
  render() {
    return this.state.isOnline ? <Offline /> : <Online />;
  }
}

export default Status;
