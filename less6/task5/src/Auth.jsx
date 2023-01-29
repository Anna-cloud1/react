import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      // spinner: false,
    };
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: 'true',
    });
    setTimeout(() => {
      this.setState({
        
      });
    }, 2000);
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    if (!this.state.isLoggedIn) {
      return <Login onLogin={this.onLogin} />;
    } else if (this.state.isLoggedIn === 'true') {
      return <Spinner size="12px" />;
    } else if (this.state.isLoggedIn) {
      return <Logout onLogout={this.onLogout} />;
    }
  }
}

export default Auth;
