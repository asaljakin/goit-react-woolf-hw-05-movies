import { Link } from 'react-router-dom';
import noImage from 'images/NoImage.jpg';
import './MovieListItem.css';

function MovieListItem({ movie, to, from }) {
  const imgPath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : noImage;

  return (
    <li className="movie-list-item" key={movie.id}>
      <Link to={to} state={{ from }}>
        <img src={imgPath} alt={movie.title} />
        <p className="movie-title">{movie.title}</p>
        <p className="release-date"> Release: {movie.release_date}</p>
      </Link>
    </li>
  );
}

export default MovieListItem;
