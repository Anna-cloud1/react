import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Comment from './Comment.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  < Comment 
  user={userInfo} 
  text='Good Gob!'
   date={new Date('2023-01-01T11:32:19.566Z')}
   />,
  rootElement,
);
