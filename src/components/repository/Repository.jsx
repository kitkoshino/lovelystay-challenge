import React from 'react';
import './repository.scss';

function Repository({name, description}) {
  return (
    <div className="repository">
      {console.log('repo comp: ', name,description)}
      <h4>Nome do Repositorio</h4>
      <hr />
      <p>descrição</p>
    </div>
  );
}

export default Repository;
