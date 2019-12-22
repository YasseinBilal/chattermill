import { themeConstants } from '../constants';

const initialState = [];

export function themeReducer(state = initialState, action) {
  switch (action.type) {
    case themeConstants.GET_THEMES_SUCCESS:
      return action.themes;
    default:
      return state;
  }
}
