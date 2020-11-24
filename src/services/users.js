import axios from 'axios';

const baseApi = axios.create({
  baseURL: 'https://api.github.com/users'
});

const findUser = async (user) => {
  try {
    const result = await baseApi.get(user);
    return result.data;
  } catch (error) {
    const { status } = error.response;
    let errorMessage =
      'Ocorreu um erro inesperado. Tente novamente mais tarde.';
    if (status === 404) {
      errorMessage = 'Utilizador não encontrado';
    }
    throw new Error(errorMessage);
  }
};

const listRepos = async (user) => {
  try {
    const result = await baseApi.get(`${user}/repos`);
    return result.data?.map((repo) => {
      return { name: repo.name, description: repo.description, id: repo.id };
    });
  } catch (error) {
    throw error;
  }
};

export { findUser, listRepos };
