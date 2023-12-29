import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const rootElement = document.querySelector('#root');

const renderSeconds = time => {
  let seconds = new Date(time).getSeconds();
  const backgroundCol = seconds % 2 === 0 ? '#fff' : '#000';

  const textCol = seconds % 2 === 0 ? '#000' : '#fff';

  const styles = {
    color: textCol,
    backgroundColor: backgroundCol,
  };

  const element = (
    <div className="seconds" style={styles}>
      {seconds}
    </div>
  );

  ReactDOM.render(element, rootElement);
};

renderSeconds(new Date());

setInterval(() => renderSeconds(new Date()), 1000)