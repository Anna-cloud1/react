import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Search } from './Search';
import './search.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Search name="Bob" />, rootElement);
