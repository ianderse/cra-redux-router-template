import * as types from '../../Redux/actionTypes';

export const addMovie = (movie) => {
  return {
    type: types.ADD_MOVIE,
    movie
  };
}

export const removeMovie = (movie) => {
  return {
    type: types.REMOVE_MOVIE,
    movie
  };
}
