/* <div className="greeting">My name is John Doe. I am 17 years old</div>; */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import moment from 'moment';

const years = date => moment(date).format('YY');

const Greeting = (props) => {

  return (
    <div className="greeting">
      My name is {props.firstName} {props.lastName}. I am {years(props.birthDate)} years old
    </div>
  );
};

export default Greeting;
