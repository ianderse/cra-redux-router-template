import movies from '../Views/Movies/reducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  movies
});

export default rootReducer;