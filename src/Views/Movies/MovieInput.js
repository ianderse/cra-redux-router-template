import React, {PropTypes, Component} from 'react';

class MovieInput extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const titleElement = document.getElementById('title');
    const releaseDateElement = document.getElementById('releaseDate');
    
    this.props.addMovie({
      index: this.props.movies.length, 
      title: titleElement.value,
      releaseDate: releaseDateElement.value
    });

    titleElement.value = "";
    releaseDateElement.value = "";

    titleElement.focus();
  }

  componentDidMount() {
    document.getElementById('title').focus();
  }

  render() {
    return (
      <div>
        <input id="title" type="text" placeholder="Title" />
        <input id="releaseDate" type="text" placeholder="Release Year" />
        <button onClick={this.onClick}>Add Movie</button>
      </div>
    );
  }
}

MovieInput.propTypes = {
  movies: PropTypes.array.isRequired,
  addMovie: PropTypes.func.isRequired
};

export default MovieInput;