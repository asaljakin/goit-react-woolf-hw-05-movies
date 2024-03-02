import Cast from 'components/Cast/Cast';
import useFetchMovieData from 'components/Hooks/useFetchMovieData';
import { getMovieCreditsById } from 'api/tmdb-api';

function CastPage() {
  const castData = useFetchMovieData(getMovieCreditsById);

  return castData && <Cast castData={castData} />;
}

export default CastPage;
