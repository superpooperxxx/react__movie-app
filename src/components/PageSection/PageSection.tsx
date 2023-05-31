import React, { ReactElement } from 'react';
import styles from './PageSection.module.scss';

interface Props {
  title: string;
  children: ReactElement;
}

export const PageSection: React.FC<Props> = ({ title, children }) => {
  return (
    <section className={styles['page-section']}>
      <h2 className={styles['page-section__title']}>{title}</h2>
      {children}
    </section>
  );
};
