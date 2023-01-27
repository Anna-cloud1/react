import React from 'react';
import ReactDOM from 'react-dom';
import Page from './Page'
import './index.scss'

const rootElement = document.querySelector('#root');
const element = < Page/>;

ReactDOM.render(element, rootElement);
