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


  handleSpinner = () => {
    this.setState({
      spinner: true,
    });
    setTimeout(() => {
      this.setState({
        isLoggedIn:true
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
    } else if (!this.state.isLoggedIn) {
      return <Login onLogin={this.handleSpinner} />;
    } else if(this.state.spinner === true) {
return <Spinner size={'20 px'} />
    }

  }
}

export default Auth;
