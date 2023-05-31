import { useState } from 'react';
import { SearchBar } from '../../components/SearchBar';
import { PageSection } from '../../components/PageSection';
// import styles from './TvSeries.module.scss';

export const TvSeries = () => {
  const [query, setQuery] = useState('');

  return (
    <>
      <SearchBar
        placeholder="Search for TV series"
        value={query}
        setValue={setQuery}
      />

      <PageSection title="TV Series">
        <p>Tv series</p>
      </PageSection>
    </>
  );
};
