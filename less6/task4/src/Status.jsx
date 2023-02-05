import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: props.isOnline,
    };
  }
  render() {
    if (this.state.isOnline) {
      return <Online />;
    }
    return <Offline />;
  }
}

export default Status;
