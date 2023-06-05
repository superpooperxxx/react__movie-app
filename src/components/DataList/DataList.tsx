import React from 'react';
import styles from './DataList.module.scss';
import { Movie } from '../../types/Movie';
import { DataCard } from '../DataCard';

interface Props {
  list: Movie[];
}

export const DataList: React.FC<Props> = ({ list }) => {
  return (
    <ul className={styles['data-list']}>
      {list.map((item) => (
        <li key={item.id}>
          <DataCard data={item} />
        </li>
      ))}
    </ul>
  );
};
