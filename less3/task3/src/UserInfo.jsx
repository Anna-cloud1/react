import React from "react";


const Userinfo = (props) => {
return (
  <div className="user-info">
    <img 
    className="avatar" 
    src={props.user.avatarUrl} 
    alt={props.user.name} 
    />

    <div className="user-info__name">
      {props.user.name}
      </div>
  </div>
);
};

export default Userinfo;