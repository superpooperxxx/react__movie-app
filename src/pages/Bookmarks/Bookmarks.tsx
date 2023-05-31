import { useState } from 'react';
import { SearchBar } from '../../components/SearchBar';
import './Bookmarks.scss';

export const Bookmarks = () => {
  const [query, setQuery] = useState('');

  return (
    <>
      <SearchBar
        placeholder="Search for bookmarked shows"
        value={query}
        setValue={setQuery}
      />
    </>
  );
};
