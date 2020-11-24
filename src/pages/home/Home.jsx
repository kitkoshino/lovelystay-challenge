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

  function lowercaseUser(user) {
    setUser(user.toLowerCase().replace(' ', ''));
  }

  async function getUser(user) {
    console.log('click', user);
    try {
      await findUser(user);
      history.push(`/profile/${user}`);
    } catch (error) {
      setErrorMessage(error);
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
          onChange={(event) => lowercaseUser(event.target.value)}
          onKeyPress={(event) =>handleKeyPress(event)}
          placeholder="Digite o nome do usuário (ex: sarahsmith)"
        />
        <button type="submit" onClick={() => getUser(user)}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Home;
