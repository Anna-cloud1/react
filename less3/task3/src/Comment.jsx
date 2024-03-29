import React from 'react';
import './comment.scss';
import moment from 'moment';
import Userinfo from './UserInfo';

const formatDate = date => moment(date).format('DD MMM YYYY');

function Comment(props) {
  return (
    <div className="comment">
     <Userinfo/>

      <div className="comment__text">
        {props.text}
        </div>
      <div 
      className="comment__date">
        {formatDate(props.date)}
        </div>
    </div>
  );
}

export default Comment;
