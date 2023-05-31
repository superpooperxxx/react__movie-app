import { useState } from 'react';
import { SearchBar } from '../../components/SearchBar';
import './Movies.scss';

export const Movies = () => {
  const [query, setQuery] = useState('');

  return (
    <>
      <SearchBar
        placeholder="Search for movies"
        value={query}
        setValue={setQuery}
      />

      {query}
    </>
  );
};
