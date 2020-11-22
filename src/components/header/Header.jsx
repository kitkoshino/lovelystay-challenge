import React from 'react';
import Logo from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import './header.scss';

function Header() {
  return (
    <div className="header">
      <img src={Logo} alt=""/>
      <Link to="/">voltar</Link>
    </div>
  )
}

export default Header;
