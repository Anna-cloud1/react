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

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
    setTimeout(() => {
      this.setState({
        spinner: true,
      });
    }, 2000);
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    if (this.state.isLoggedIn) {
      return <Logout onLogout={this.handleLogout} />;
    } else {
     return <Login onLogin={this.handleLogin} spinner={true} />;
    }

    //     return (
    //       <>
    // {/*
    //         <Login />
    //         <Spinner />
    //
    //       </>
    //     );
  }
}

export default Auth;
