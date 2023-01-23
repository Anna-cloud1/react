import React from 'react';
import Clock from './Clock';

const App = () => {
  return (
    <>
      <Clock location="Argentina" offset={3}/>
      <Clock location="Kyiv" offset={2}/>
      <Clock location="Madrid" offset={1}/>
    </>
  );
};

export default App;
