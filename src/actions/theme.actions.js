import { themeConstants } from '../constants';
import { themeService } from '../services';

export const themeActions = {
  getAll
};

function getAll() {
  return dispatch => {
    dispatch(request());
    return themeService.getAll().then(
      themes => dispatch(success(themes)),
      error => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: themeConstants.GET_THEMES_REQUEST };
  }
  function success(themes) {
    return { type: themeConstants.GET_THEMES_SUCCESS, themes: themes.data };
  }
  function failure(error) {
    return { type: themeConstants.GET_THEMES_FAILURE, error };
  }
}
