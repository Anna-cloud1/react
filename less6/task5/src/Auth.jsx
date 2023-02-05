import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      spinner: false,
    };
  }

  onLogin = () => {
    this.setState({
      spinner: true,
    });
    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        spinner: false
      });
    }, 2000);
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    if (this.state.isLoggedIn) {
      return <Logout onLogout={this.onLogout} />
    } else if (this.state.spinner === true) {
      return <Spinner size="15px" />;
    } else if (!this.state.isLoggedIn) {
      return <Login onLogin={this.onLogin} />;
    }
  }
}

export default Auth;
