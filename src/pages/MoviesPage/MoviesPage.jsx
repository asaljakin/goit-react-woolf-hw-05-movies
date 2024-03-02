import Movies from 'components/Movies/Movies';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByTitle } from 'api/tmdb-api';

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesData, setMoviesData] = useState(null);
  const query = searchParams.get('query');

  useEffect(() => {
    async function fetchData() {
      setMoviesData(await getMoviesByTitle(query));
    }

    if (query) {
      fetchData();
    }
  }, [query]);

  return (
    <Movies
      query={query}
      moviesData={moviesData}
      onSubmit={query => setSearchParams({ query })}
    />
  );
}

export default MoviesPage;
