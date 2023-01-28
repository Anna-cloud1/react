import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

// import IsOnline from './isOnline';


const IsOnline = props => {
  if (props.isOnline) {
    return <Offline />;
  } else {
    return <Online />;
  }
};

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
