import React from 'react';
import './index.scss';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

const Greeting = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
};

export default Greeting;
