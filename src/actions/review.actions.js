import { reviewConstants } from '../constants';
import { reviewService } from '../services';

export const reviewActions = {
  getAll
};

function getAll({ limit, offset, themeId }) {
  return dispatch => {
    dispatch(request());
    reviewService.getAll({ limit, offset, themeId }).then(
      reviews => dispatch(success({ reviews, offset })),
      error => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: reviewConstants.GET_REVIEWS_REQUEST };
  }

  // eslint-disable-next-line no-shadow
  function success({ reviews, offset }) {
    return {
      type: reviewConstants.GET_REVIEWS_SUCCESS,
      reviews: reviews.data,
      offset
    };
  }

  function failure(error) {
    return { type: reviewConstants.GET_REVIEWS_FAILURE, error };
  }
}
