import React, { Component } from 'react';


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
    if (this.state.status === 'offline') {
      return <div className="status status_offline">{this.state.status}</div>;
    } else {
      return <div className="status">{this.state.status}</div>;
    }
  }
}

export default ConnectionStatus;
