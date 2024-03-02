import { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import './SearchBar.css';
import { useSearchParams } from 'react-router-dom';

function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const lastQuery = searchParams.get('query');
    if (lastQuery) {
      setQuery(lastQuery);
    }
  }, [searchParams]);

  function handleSubmit(event) {
    event.preventDefault();
    if (query) {
      onSubmit(query);
    }
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        placeholder="Movie title"
        onChange={ev => setQuery(ev.target.value)}
      />
      <button className="search-btn">
        <CiSearch />
      </button>
    </form>
  );
}

export default SearchBar;
