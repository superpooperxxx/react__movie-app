import React, { ReactElement } from 'react';
import styles from './Page.module.scss';
import { PageHeader } from '../PageHeader';

interface Props {
  children: ReactElement;
}

export const Page: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles['page']}>
      <div className={styles['page__header']}>
        <PageHeader />
      </div>

      <main className={styles['page__main']}>{children}</main>
    </div>
  );
};
