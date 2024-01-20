import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Mailbox from './Mailbox';

const rootElement = document.querySelector('#root');
const element = <Mailbox unreadMessages={['s']} />;

ReactDOM.render(element, rootElement);
