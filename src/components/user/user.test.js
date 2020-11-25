import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import User from './User';

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

it('user informations', () => {
  const fakeUser = {
    name: 'Cristiane Koshino',
    reposQuantity: '41',
    picture:
      'https://avatars1.githubusercontent.com/u/54844480?s=460&u=81fe884f95dc1ed1f804f901f0c7d9a7eb060dad&v=4'
  };

  act(() => {
    render(
      <User
        name={fakeUser.name}
        reposQuantity={fakeUser.reposQuantity}
        picture={fakeUser.picture}
      />,
      container
    );
  });
  expect(container.querySelector('img').src).toBe(fakeUser.picture);
  expect(container.querySelector('h3').textContent).toBe(fakeUser.name);
  expect(container.querySelector('span').textContent).toBe(
    fakeUser.reposQuantity
  );
});
