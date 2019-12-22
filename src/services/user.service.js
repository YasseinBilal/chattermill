import config, { handleResponse } from './config';
import fetcher from '../helpers/fetch-wrapper';

export const userService = {
  login
};

async function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
    public: true
  };

  const response = await fetcher(`${config.baseUrl}/login`, requestOptions);
  const { code, ...user } = await handleResponse(response);

  // store jwt token and expire date in local storage to keep user logged in between page refreshes
  localStorage.setItem('user', JSON.stringify(user));

  return user;
}
