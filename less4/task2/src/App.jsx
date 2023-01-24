import React from 'react';
import Clock from './Clock';

const App = () => {
  return (
    <>
      <Clock location="Argentina" offset={3} interval={1000} />
      <Clock location="Kyiv" offset={2} interval={1000} />
      <Clock location="Madrid" offset={1} interval={1000} />
    </>
  );
};

export default App;
