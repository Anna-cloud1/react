import React from 'react';
import Comment from './Comment';

const userInfo = {
  name: 'Tom',
  avatarUrl:
    'https://png.pngtree.com/png-clipart/20210311/original/pngtree-customer-login-avatar-png-image_6015290.jpg',
};

const App = () => {
  return <Comment author={userInfo} text="Good job!" date={new Date('2019-01-01T11:32:19.566Z')} />;
};

export default App;
