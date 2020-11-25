import { findUser, baseApi } from './users';

let mockAxios;

beforeEach(() => {
  mockAxios = jest.spyOn(baseApi, 'get');
});

afterEach(() => {
  jest.clearAllMocks();
});

it('user services - success', async () => {
  const responseFake = { name: 'Cristiane Koshino' };
  mockAxios.mockImplementation(() => Promise.resolve({ data: responseFake }));
  await expect(findUser('')).resolves.toEqual(responseFake);
});

it('user services - not found', async () => {
  const responseFake = { response: { status: 404 } };
  mockAxios.mockImplementation(() => Promise.reject(responseFake));
  await expect(findUser('')).rejects.toThrowError(
    new Error('Utilizador não encontrado')
  );
});

it('user services - generic error', async () => {
  const responseFake = { response: { status: 500 } };
  mockAxios.mockImplementation(() => Promise.reject(responseFake));
  await expect(findUser('')).rejects.toThrowError(
    new Error('Ocorreu um erro inesperado. Tente novamente mais tarde.')
  );
});
