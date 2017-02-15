import * as types from '../../Redux/actionTypes';

const initialState = [

];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_MOVIE:
      return [...state, Object.assign({}, action.movie)];
    case types.REMOVE_MOVIE:
      return state.filter(movie => movie.index !== action.movie.index);
    default:
      return state;
  }
};