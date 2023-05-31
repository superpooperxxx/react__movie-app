import { useState } from 'react';
import styles from './Home.module.scss';

import { SearchBar } from '../../components/SearchBar';
import { PageSection } from '../../components/PageSection';

export const Home = () => {
  const [query, setQuery] = useState('');

  return (
    <div className={styles['home-page']}>
      <SearchBar
        placeholder="Search for movies or TV series"
        value={query}
        setValue={setQuery}
      />

      <div className={styles['home-page__section']}>
        <PageSection title="Trending">
          <p>Carousel with trending</p>
        </PageSection>
      </div>

      <div className={styles['home-page__section']}>
        <PageSection title="Recommended for you">
          <p>List of movies and tv-shows with pagination</p>
        </PageSection>
      </div>
    </div>
  );
};
