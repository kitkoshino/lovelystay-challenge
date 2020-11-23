import React from 'react';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './header.scss';


function Header() {

  return (
    <div className="header">
      <img src={Logo} alt=""/>
      <Link to="/"><RiArrowGoBackFill /></Link>
    </div>
  )
}

export default Header;
