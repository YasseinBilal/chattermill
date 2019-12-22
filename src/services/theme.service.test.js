/* eslint-disable function-paren-newline */
import { themeService } from './theme.service';
import * as config from './config';

jest.mock('../helpers/fetch-wrapper');
const fetchWrapper = require('../helpers/fetch-wrapper');

const handleResponseSpy = jest.spyOn(config, 'handleResponse');

fetchWrapper.default = jest.fn(
  () =>
    new Promise(resolve =>
      resolve({
        text: () => new Promise(r => r(JSON.stringify({})))
      })
    )
);

describe('Theme Service', () => {
  it('shoud call handleResponse when calling getAll', done => {
    themeService.getAll().catch(() => {
      expect(handleResponseSpy).toHaveBeenCalledTimes(1);
      done();
    });
  });
});
