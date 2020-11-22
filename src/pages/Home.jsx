import React from 'react';
import Logo from '../assets/logo.svg';
import '../styles/home.scss';

function Home() {
  return (
    <div className="home">
      <img src={Logo} alt="logo" />
      <div className="home__search">
        <input type="text" />
        <button>Search</button>
      </div>
    </div>
  )
}

export default Home
