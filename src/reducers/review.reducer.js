import { reviewConstants } from '../constants';

const initialState = [];

export function reviewReducer(state = initialState, action) {
  switch (action.type) {
    case reviewConstants.GET_REVIEWS_SUCCESS:
      if (action.offset === 0) {
        return [...action.reviews];
      }
      return [...state, ...action.reviews];
    default:
      return state;
  }
}
