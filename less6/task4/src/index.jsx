import React from 'react';
import ReactDOM from 'react-dom';
import Status from './Status'
import './index.scss'


const rootElement = document.querySelector('#root');
const element = < Status isOnline={false}/>;

ReactDOM.render(element, rootElement);
