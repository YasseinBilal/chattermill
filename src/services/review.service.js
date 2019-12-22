/* eslint-disable radix */
import config, { handleResponse } from './config';
import fetcher from '../helpers/fetch-wrapper';

export const reviewService = {
  getAll
};

async function getAll({ limit, offset, themeId }) {
  const requestOptions = { method: 'GET' };
  const theme = themeId !== '' ? `&theme_id=${parseInt(themeId)}` : '';
  const url = `${config.baseUrl}/api/reviews?limit=${limit}&offset=${offset +
    theme}`;
  const response = await fetcher(url, requestOptions);
  return handleResponse(response);
}
