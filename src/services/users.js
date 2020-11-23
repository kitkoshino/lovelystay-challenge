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

export {findUser};