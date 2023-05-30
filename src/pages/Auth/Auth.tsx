import { Logo } from '../../components/UI/Logo';
import styles from './Auth.module.scss';
import { AuthForm } from './components/AuthForm';

export const Auth = () => (
  <main className={styles['auth-page']}>
    <div className={styles['auth-page__logo']}>
      <Logo />
    </div>

    <div className={styles['auth-page__form']}>
      <AuthForm />
    </div>
  </main>
);
