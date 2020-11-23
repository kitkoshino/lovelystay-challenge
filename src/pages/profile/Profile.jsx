import React from 'react';
import Header from '../../components/header/Header';
import Repository from '../../components/repository/Repository';
import User from '../../components/user/User';
import './profile.scss';

function Profile() {
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
