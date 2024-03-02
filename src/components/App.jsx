import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const MainLayout = lazy(() => import('./Layouts/MainLayout'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MoviesDetailPage = lazy(() =>
  import('pages/MoviesDetailsPage/MoviesDetailsPage')
);
const CastPage = lazy(() => import('pages/CastPage/CastPage'));
const ReviewsPage = lazy(() => import('pages/ReviewsPage/ReviewsPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MoviesDetailPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
