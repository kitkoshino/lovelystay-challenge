import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Repository from './Repository';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('repository test with and without description', () => {
  const fakeRepo = {
    name: 'algaShopping',
    description: 'Project developed in 2 days during AlgaWorks - Desafio React'
  };

  act(() => {
    render(
      <Repository name={fakeRepo.name} description={fakeRepo.description} />,
      container
    );
  });

  expect(container.querySelector('h4').textContent).toBe(fakeRepo.name);
  expect(container.querySelector('p').textContent).toBe(fakeRepo.description);

  act(() => {
    render(
      <Repository name={fakeRepo.name} description={null} />,
      container
    );
  });

  expect(container.querySelector('h4').textContent).toBe(fakeRepo.name);
  expect(container.querySelector('p').textContent).toBe('sem descrição');

});


