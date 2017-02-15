import React, {PropTypes} from 'react';
import Movie from './Movie';

const MovieList = ({movies}) => {
  return (
    <div>
      {movies.map((movie) => 
        <Movie key={movie.title} movie={movie} />  
      )}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieList;