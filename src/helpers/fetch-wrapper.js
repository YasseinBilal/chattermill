import { history } from './history';

export function isValidToken() {
  if (!localStorage.user) return false;
  const { token, expire } = JSON.parse(localStorage.user);
  const isExpired = new Date(expire) < new Date();
  return !!token && !isExpired;
}

function requestIntercepter(options) {
  // return options if the api is public
  if (options.public) return options;
  if (!isValidToken()) {
    // redirect to login if token is not valid or expired
    history.push('/');
  }
  const { token } = JSON.parse(localStorage.user);

  const update = { ...options };
  update.headers = {
    ...update.headers,
    Authorization: `Bearer ${token}`
  };
  return update;
}

export default function fetcher(url, options) {
  return fetch(url, requestIntercepter(options));
}
