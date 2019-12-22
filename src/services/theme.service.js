import config, { handleResponse } from './config';
import fetcher from '../helpers/fetch-wrapper';

export const themeService = {
  getAll
};

async function getAll() {
  const requestOptions = { method: 'GET' };
  const response = await fetcher(
    `${config.baseUrl}/api/themes`,
    requestOptions
  );
  return handleResponse(response);
}
