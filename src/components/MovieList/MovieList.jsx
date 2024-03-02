import MovieListItem from 'components/MovieListItem/MovieListItem';
import './MoviesList.css';

function MovieList({ movies, to, from }) {
  return (
    <ul className="movie-list">
      {movies.map(movie => (
        <MovieListItem
          to={`${to}/${movie.id}`}
          from={from}
          key={movie.id}
          movie={movie}
        />
      ))}
    </ul>
  );
}

export default MovieList;
