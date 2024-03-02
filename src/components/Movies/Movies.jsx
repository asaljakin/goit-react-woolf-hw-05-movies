import MovieList from 'components/MovieList/MovieList';
import SearchBar from 'components/SearchBar/SearchBar';

function Movies({ moviesData, onSubmit, query }) {
  console.log('moviesData', moviesData);
  console.log('moviesData?.rezults?.length', moviesData?.rezults?.length);

  return (
    <main>
      <SearchBar onSubmit={onSubmit} />
      {moviesData && (
        <MovieList
          movies={moviesData.results}
          to="/movies"
          from={`/movies?query=${query}`}
        />
      )}
      {moviesData?.results?.length === 0 && (
        <p>
          Sorry. No results were found for your request. Try another request.
        </p>
      )}
    </main>
  );
}

export default Movies;
