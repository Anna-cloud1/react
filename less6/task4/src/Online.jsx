import React from 'react';

const Online = ({ isOnline }) => {
  return (
    <div className="status">
      <span className="status__text">Online</span>
      <button className="status__btn" isOnline={isOnline}>
       All good!
      </button>
    </div>
  );
};

export default Online;
