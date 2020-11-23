import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Repository from '../../components/repository/Repository';
import User from '../../components/user/User';
import { useParams } from 'react-router-dom';
import { findUser, listRepos } from '../../services/users';
import './profile.scss';

function Profile() {
  const { user } = useParams();
  const [userData, setUserData] = useState([]);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    
    findUser(user).then((res) => {
      setUserData(res)
    });

    listRepos(user).then((res) => {
      setRepositories(res);
    });
  }, [user]);

  return (
    <section className="profile">
      <header>
        <Header name={userData.name} reposQuantity={userData.public_repos}/>
      </header>
      <section className="profile__info">
        <User />
      </section>
      <section className="profile_repositories">
        {repositories.map((repository) => (
          <Repository key={repository.id} name={repository.name} description={repository.description}/>
        ))}
      </section>
    </section>
  );
}

export default Profile;
