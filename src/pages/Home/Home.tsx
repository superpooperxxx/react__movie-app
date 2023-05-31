import { useState } from 'react';
import { SearchBar } from '../../components/SearchBar';

export const Home = () => {
  const [query, setQuery] = useState('');

  return (
    <>
      <SearchBar
        placeholder="Search for movies or TV series"
        value={query}
        setValue={setQuery}
      />
      {query}
    </>
  );
};
