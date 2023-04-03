import React, { useState } from "react";
import Dimensions from './Dimensions';

const Demo = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      {isVisible && < Dimensions/>}
    </div>
  );
}


export default Demo;