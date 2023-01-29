import React from 'react';
import ReactDOM from 'react-dom';
import Auth from './Auth';
import './index.scss';

const rootElement = document.querySelector('#root');
const element = <Auth />;

ReactDOM.render(element, rootElement);
