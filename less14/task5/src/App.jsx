import React, { useState } from 'react';
import Clock from './Clock';

const App = () => {
  const [visible, isVisible] = useState(true);

  return (
    <div>
      <button className="btn" onClick={() => isVisible(!visible)}>
        Toggle
      </button>
      {visible && <Clock location="Argentina" offset={-3} />}
      {visible && <Clock location="Kyiv" offset={3} />}
      {visible && <Clock location="Madrid" offset={2} />}
    </div>
  );
};

export default App;
