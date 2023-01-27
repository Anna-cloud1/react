import React from 'react';

const Offline = ({ isOnline }) => {
  return (
    <div className="status">
      <span className="status__text">Offline</span>
      <button className="status__btn" isOnline={isOnline}>Reconnect</button>
    </div>
  );
};

export default Offline;
