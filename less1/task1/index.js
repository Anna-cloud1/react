/* eslint-disable no-undef */

const rootEl = document.querySelector('#root');

// const greetingEl = document.createElement('div');
// greetingEl.classList.add('greeting');
// greetingEl.textContent = 'Hello, React!';
// rootEl.append(greetingEl);

const greetingEl = React.createElement(
  'div',
  { className: 'greeting' },
  'Hello, React!'
);

ReactDOM.render(greetingEl, rootEl);