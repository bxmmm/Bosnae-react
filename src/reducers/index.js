import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';
import imagesReducer from './imagesReducer';

const rootReducer = combineReducers({
  articles: articlesReducer,
  images: imagesReducer
});

export default rootReducer;
