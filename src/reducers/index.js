import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { alert } from './alert.reducer';
import { themeReducer } from './theme.reducer';
import { reviewReducer } from './review.reducer';

const rootReducer = combineReducers({
  authentication,
  alert,
  themes: themeReducer,
  reviews: reviewReducer
});

export default rootReducer;
