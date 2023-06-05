import { useEffect, useState } from 'react';
import { SearchBar } from '../../components/SearchBar';
import styles from './Movies.module.scss';
import { PageSection } from '../../components/PageSection';
import { getMovies } from '../../api/requests';
import { DataList } from '../../components/DataList';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies()
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((error) => alert(error));
  }, []);

  console.log(movies);

  return (
    <div className={styles['movies-page']}>
      <SearchBar
        placeholder="Search for movies"
        value={query}
        setValue={setQuery}
      />

      <PageSection title="Movies">
        <DataList list={movies} />
      </PageSection>
    </div>
  );
};
