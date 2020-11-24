import React from 'react';
import './repository.scss';

function Repository({ name, description }) {
  return (
    <div className="repository">
      <div className="repository__name">
        <h4>{name}</h4>
      </div>
      <hr />
      <p>{description ? description : 'sem descrição'}</p>
    </div>
  );
}

export default Repository;
