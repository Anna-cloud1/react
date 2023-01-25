import React from 'react';
import ReactDOM from 'react-dom';
import ColorPicker from './ColorPicker';

const rootElement = document.querySelector('#root');
const element = <ColorPicker />;

ReactDOM.render(element, rootElement);
