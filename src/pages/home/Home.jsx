import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo.svg';
import { findUser } from '../../services/users';
import { useHistory } from 'react-router-dom';
import './home.scss';

function Home() {
  const history = useHistory();

  const [user, setUser] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    document.querySelector('input').focus();
  }, []);

  function handleUser(event) {
    if (event.currentTarget.value.includes(" ")) {
      event.currentTarget.value = event.currentTarget.value.replace(' ', "");
    }

    setUser(event.currentTarget.value);
  }

  async function getUser(user) {
    console.log('click', user);
    try {
      await findUser(user);
      history.push(`/profile/${user}`);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  function handleKeyPress(event) {

    console.log('enter')
  }

  return (
    <div className="home">
      {console.log('user', user)}
      <img src={Logo} alt="logo" />
      
      <div className="home__search">
        <div className="home__link">
          <p>https://github.com/</p>
        </div>
        <input
          type="text"
          onChange={(event) => handleUser(event)}
          onKeyPress={(event) =>handleKeyPress(event)}
          placeholder="Digite o nome do usuário (ex: sarahsmith)"
        />
        <button type="submit" onClick={() => getUser(user)}>
          Search
        </button>
      </div>
      <span>{errorMessage ? `${errorMessage}` : ''}</span>
    </div>
  );
}

export default Home;
