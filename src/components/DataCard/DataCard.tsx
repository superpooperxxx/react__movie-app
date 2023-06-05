import React from 'react';
import styles from './DataCard.module.scss';
import { Movie } from '../../types/Movie';

interface Props {
  data: Movie;
}

export const DataCard: React.FC<Props> = ({ data }) => {
  return (
    <article className={styles['data-card']}>
      <div className={styles['data-card__image-container']}>
        <img
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          alt={`Poster of ${data.title}`}
          className={styles['data-card__poster']}
        />
      </div>
    </article>
  );
};
