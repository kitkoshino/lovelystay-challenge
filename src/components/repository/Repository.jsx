import React from 'react';
import './repository.scss';

function Repository({ name, description }) {
  return (
    <div className="repository">
      <h4>{name}</h4>
      <hr />
      <p>{description === null ? 'sem descrição' : description}</p>
    </div>
  );
}

export default Repository;
