import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
import {findUser} from '../../services/users';
import { useHistory } from 'react-router-dom';
import './home.scss';

function Home() {

  const history = useHistory();

  const [user,setUser] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function lowercaseUser(user) {
    setUser(user.toLowerCase().replace(' ',''));
  }

  async function getUser(user){
    console.log('click',user);
    try {
      await findUser(user);
      history.push(`/profile/${user}`);
    } catch(error){
      setErrorMessage(error);
    }
  }


  return (
    <div className="home">
      {console.log('user',user)}
      <img src={Logo} alt="logo" />
      <div className="home__search">
        <input type="text" onChange={(event) => lowercaseUser(event.target.value)}/>
        <button type="submit" onClick={()=>getUser(user)}>Search</button>
      </div>
    </div>
  )
}

export default Home;
