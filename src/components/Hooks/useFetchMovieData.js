import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function useFetchMovieData(fn) {
  const { movieId } = useParams();
  const [fetchData, setFetchData] = useState(null);

  useEffect(() => {
    (async function fetchMovie() {
      setFetchData(await fn(movieId));
    })();
  }, [movieId, fn]);

  return fetchData;
}
