import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as movieActions from './actions';
import MovieList from './MovieList';
import MovieInput from './MovieInput';

class MoviesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }

  render() {
    const {movies} = this.props;

    return (
      <div>
        <MovieInput addMovie={this.props.actions.addMovie} movies={movies}/>
        <MovieList movies={movies} />
      </div>
    );
  }
}

MoviesContainer.propTypes = {
  movies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(movieActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);