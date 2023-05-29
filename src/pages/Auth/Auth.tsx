import styles from './Auth.module.scss';
import { AuthForm } from './components/AuthForm';
import { Link } from 'react-router-dom';
import AppIcon from '../../../public/images/icon__app.png';

export const Auth = () => (
  <main className={styles['auth-page']}>
    <Link to="/" className={styles['auth-page__logo']}>
      <img
        src={AppIcon}
        alt="movie app logo"
        className={styles['auth-page__logo-img']}
      />
    </Link>

    <div className={styles['auth-page__form']}>
      <AuthForm />
    </div>
  </main>
);
