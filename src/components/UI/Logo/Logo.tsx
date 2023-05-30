import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';
import AppIcon from '../../../../public/images/icon__app.png';

export const Logo = () => (
  <Link to="/" className={styles['logo']}>
    <img src={AppIcon} alt="movie app logo" className={styles['logo__img']} />
  </Link>
);
