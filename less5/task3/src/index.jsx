import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

const rootElement = document.querySelector('#root');
const element = <Counter />;

ReactDOM.render(element, rootElement);
