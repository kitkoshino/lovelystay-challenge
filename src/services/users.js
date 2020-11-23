import axios from 'axios';

const baseApi = axios.create({
  baseURL: 'https://api.github.com/users'
})

const findUser = async (user) => {
  try {
    const result = await baseApi.get(user);
    return result.data;
  } catch(error) {
    console.log(error);
  }
  
}

const listRepos = async(user) => {
  try{
    const result = await baseApi.get(`${user}/repos`);
    return result.data?.map(repo => {
      return {name: repo.name, description: repo.description, id: repo.id}
    });
  } catch(error) {
    console.log(error)
  }
}

export {findUser,listRepos};