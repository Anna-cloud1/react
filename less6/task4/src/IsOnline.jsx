import React from 'react';
import Online from './Online';
import Offline from './Offline';

const IsOnline = props => {
  if (props.isOnline) {
    return < Offline/>
  } else {
    return < Online />
  }
}

export default IsOnline