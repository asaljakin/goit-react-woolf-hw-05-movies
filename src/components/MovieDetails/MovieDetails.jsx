import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import noImage from 'images/NoImage.jpg';
import './MovieDetails.css';

function MovieDetails({ movie }) {
  const location = useLocation();
  const toPath = location.state?.from ?? '/';
  const imgPath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : noImage;
  const genres = movie.genres.map(({ name }) => name).join(', ');

  return (
    <main>
      <Link className="go-back-btn" to={toPath}>
        &larr; Go back
      </Link>
      <div className="movie-details-container">
        <img src={imgPath} alt={movie.title} />
        <div className="movie-details-data">
          <h1>{movie.title}</h1>
          <p>
            <span>User score: </span>
            {movie.vote_average}
          </p>
          <p>
            <span>Overview: </span>
            {movie.overview}
          </p>
          <p>
            {' '}
            <span>Genres: </span>
            {genres}
          </p>
        </div>
      </div>
      <div className="movie-add-info">
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to="Cast" state={{ from: toPath }}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="Reviews" state={{ from: toPath }}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
}

export default MovieDetails;
