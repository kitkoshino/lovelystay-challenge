import React from 'react';
import './user.scss';
import Foto from '../../assets/ironMan.png';

function User() {
  return (
    <div className="user">
      <div className="user__info">
        <img src={Foto} alt=""/>
        <h3>Antonio Stark</h3>
      </div>
      <div className="user__repos">
        <span>40</span>
        <p>repositories</p>
      </div>

    </div>
  )
}

export default User;
