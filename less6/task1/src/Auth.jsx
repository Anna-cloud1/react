import React, { Component } from 'react';

import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const button = this.state.isLoggedIn ? (
      <Logout onClick={this.handleLogout} />
    ) : (
      <Login onClick={this.handleLogin} />
    );

    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default Auth;
