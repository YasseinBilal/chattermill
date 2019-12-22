import { reviewReducer } from './review.reducer';
import { reviewConstants } from '../constants';

describe('review reducer', () => {
  it('should return the initial state', () => {
    expect(reviewReducer(undefined, {})).toEqual([]);
  });

  it('should override reviews in case of offset 0', () => {
    expect(
      reviewReducer([], {
        type: reviewConstants.GET_REVIEWS_SUCCESS,
        reviews: [{ id: 0, comment: 'test' }],
        offset: 0
      })
    ).toEqual([{ id: 0, comment: 'test' }]);
  });

  it('should add to current reviews in case of offset > 0', () => {
    expect(
      reviewReducer([{ id: 0, comment: 'test1' }], {
        type: reviewConstants.GET_REVIEWS_SUCCESS,
        reviews: [{ id: 1, comment: 'test2' }],
        offset: 10
      })
    ).toEqual([
      { id: 0, comment: 'test1' },
      { id: 1, comment: 'test2' }
    ]);
  });
});
