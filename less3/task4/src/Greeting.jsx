/* <div className="greeting">My name is John Doe. I am 17 years old</div>; */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const Greeting = props => {
  return (
    <div className="greeting">
      My name is {props.name} {props.lastName}. I am {props.age} years old
    </div>
  );
};

export default Greeting;
