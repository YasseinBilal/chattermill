import { alertActions } from './alert.actions';
import { alertConstants } from '../constants';

describe('Alert Actions', () => {
  it('should create a success alert action', () => {
    const message = 'successfully loaded';
    const expectedAction = {
      type: alertConstants.SUCCESS,
      message
    };
    expect(alertActions.success(message)).toEqual(expectedAction);
  });

  it('should create an error alert action', () => {
    const message = 'error message';
    const expectedAction = {
      type: alertConstants.ERROR,
      message
    };
    expect(alertActions.error(message)).toEqual(expectedAction);
  });

  it('should create a clear alert action', () => {
    const expectedAction = {
      type: alertConstants.CLEAR
    };
    expect(alertActions.clear()).toEqual(expectedAction);
  });
});
