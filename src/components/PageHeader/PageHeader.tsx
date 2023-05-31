import { Nav } from '../Nav';
import { Logo } from '../UI/Logo';
import styles from './PageHeader.module.scss';

export const PageHeader = () => {
  return (
    <header className={styles['page-header']}>
      <div className={styles['page-header__logo']}>
        <Logo />
      </div>

      <div className={styles['page-header__nav']}>
        <Nav />
      </div>

      <div className={styles['page-header__profile']}></div>
    </header>
  );
};
