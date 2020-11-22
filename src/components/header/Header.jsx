import React from 'react';
import Logo from '../../assets/logo.svg';
import './header.scss';

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt=""/>
      <a href="/">voltar</a>
    </div>
  )
}

export default Header;
