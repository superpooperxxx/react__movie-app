import { useState } from 'react';
import { SearchBar } from '../../components/SearchBar';
import './Movies.scss';
import { PageSection } from '../../components/PageSection';

export const Movies = () => {
  const [query, setQuery] = useState('');

  return (
    <>
      <SearchBar
        placeholder="Search for movies"
        value={query}
        setValue={setQuery}
      />

      <PageSection title="Movies">
        <p>Movies</p>
      </PageSection>
    </>
  );
};
