import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: false,
    };
  }

  onlineHandler = () => {
    this.setState({
      isOnline: true,
    });
  };

  offlineHandler = () => {
    this.setState = {
      isOnline: false,
    };
  };

  render() {
    // const isOnl = this.state.isOnline ? (
    //   <Offline isOnline={this.offlineHandler} />
    // ) : (
    //   <Online isOnline={this.onlineHandler} />
    // );

    return (
      <>
        {this.state.isOnline ? (
          <Offline isOnline={this.offlineHandler} />
        ) : (
          <Online isOnline={this.onlineHandler} />
        )}
      </>
    );
  }
}

export default Status;
