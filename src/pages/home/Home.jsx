import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
import {findUser} from '../../services/users';
import './home.scss';

function Home() {

  const [user,setUser] = useState('');

  function getUser(user){
    console.log('click',user);
    findUser(user);
  }

  return (
    <div className="home">
      {console.log('user',user)}
      <img src={Logo} alt="logo" />
      <div className="home__search">
        <input type="text" onChange={(event) => setUser(event.target.value)}/>
        <button type="submit" onClick={()=>getUser(user)}>Search</button>
      </div>
    </div>
  )
}

export default Home;
