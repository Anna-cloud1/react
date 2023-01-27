import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Mailbox from './Mailbox'

const rootElement = document.querySelector('#root');
const element = < Mailbox unreadMessages={['aaa', 4334, 'g']} />;

ReactDOM.render(element, rootElement);


