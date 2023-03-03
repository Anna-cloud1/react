import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './UsersList';
import './index.scss'
const rootElement = document.querySelector('#root');


const users = [
  { id: 1, name: 'John', age: 32 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Alice', age: 29 },
  { id: 4, name: 'Mary', age: 37 },
  { id: 5, name: 'Mike', age: 41 },
  { id: 6, name: 'Jane', age: 26 },
  { id: 7, name: 'Tom', age: 23 },
];

ReactDOM.render(<UsersList users={users}/>, rootElement);
