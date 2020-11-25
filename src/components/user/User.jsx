import React from 'react';
import './user.scss';

function User({name, reposQuantity,picture}) {
  return (
    <div className="user">
      <div className="user__info">
        <img src={picture} alt="user"/>
        <h3 id="userName">{name}</h3>
      </div>
      <div className="user__repos">
        <span>{reposQuantity}</span>
        <p>repositories</p>
      </div>

    </div>
  )
}

export default User;
