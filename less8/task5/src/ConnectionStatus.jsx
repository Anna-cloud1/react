import React, { Component } from 'react';
import Offline from './Offline';
import Online from './Online';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
  };

  componentDidMount() {
    window.addEventListener('online', this.ifOnline);
    window.addEventListener('offline', this.ifOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.ifOnline);
    window.removeEventListener('offline', this.ifOffline);
  }

  ifOnline = () => {
    this.setState({
      status: 'online',
    });
  };

  ifOffline = () => {
    this.setState({
      status: 'offline',
    });
  };

  render() {
    if (this.status === 'offline') {
      return <Offline />;
    } else {
      return <Online />;
    }
  }
}

export default ConnectionStatus;
