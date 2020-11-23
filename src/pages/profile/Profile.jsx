import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import Repository from '../../components/repository/Repository';
import User from '../../components/user/User';
import { findUser } from '../../services/users';
import './profile.scss';

function Profile() {

  // useEffect(() => {
  //   findUser('kitkoshino');
  // }, []);

  
  return (
    <section className="profile">
      <header>
        <Header />
      </header>
      <section className="profile__info">
        <User />
      </section>
      <section className="profile_repositories">
        <Repository />
        <Repository />
        <Repository />
        <Repository />
        <Repository />

      </section>
    </section>
  );
}

export default Profile;
