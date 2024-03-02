import Home from 'components/Home/Home';
import { useEffect, useState } from 'react';
import { getTrendingMoviesToday } from 'api/tmdb-api';

function HomePage() {
  const [moviesData, setMoviesData] = useState(null);

  useEffect(() => {
    (async function fetchData() {
      try {
        setMoviesData(await getTrendingMoviesToday());
      } catch (error) {
        setMoviesData(null);
      }
    })();
  }, []);

  return moviesData && <Home movies={moviesData.results} />;
}

export default HomePage;
