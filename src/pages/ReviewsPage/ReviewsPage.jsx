import useFetchMovieData from 'components/Hooks/useFetchMovieData';
import Reviews from 'components/Reviews/Reviews';
import { getMovieReviewsById } from 'api/tmdb-api';

function ReviewsPage() {
  const reviewsData = useFetchMovieData(getMovieReviewsById);

  return reviewsData && <Reviews reviewsData={reviewsData} />;
}

export default ReviewsPage;
