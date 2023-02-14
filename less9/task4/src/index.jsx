import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const rootElement = document.querySelector('#root');

const users = [
  {
    name: 'Anna',
    age: 21,
    id: 'id-0',
  },

  {
    name: 'Oleksandr',
    age: 25,
    id: 'id-1',
  },
  {
    name: 'Conny',
    age: 23,
    id: 'id-2',
  },
  {
    name: 'Nastya',
    age: 27,
    id: 'id-3',
  },
];

ReactDOM.render(<UsersList users={users}/>, rootElement);
