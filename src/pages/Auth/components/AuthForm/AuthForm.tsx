import { useState } from 'react';
import styles from './AuthForm.module.scss';

export const AuthForm = () => {
  const [mode, setMode] = useState<'sign up' | 'login'>('sign up');

  const toggleMode = () => {
    setMode((currentMode) => (currentMode === 'login' ? 'sign up' : 'login'));
  };

  return (
    <form className={styles['auth-form']}>
      <h2 className={styles['auth-form__title']}>
        {mode === 'sign up' ? 'Sign Up' : 'Login'}
      </h2>

      <div className={styles['auth-form__inputs']}>
        <label className={styles['auth-form__input-item']}>
          <span className={styles['auth-form__error-message']}></span>
          <input
            type="text"
            placeholder="Email address"
            className={styles['auth-form__input']}
          />
        </label>

        <label className={styles['auth-form__input-item']}>
          <span className={styles['auth-form__error-message']}></span>
          <input
            type="password"
            placeholder="Password"
            className={styles['auth-form__input']}
          />
        </label>

        {mode === 'sign up' && (
          <label className={styles['auth-form__input-item']}>
            <span className={styles['auth-form__error-message']}></span>
            <input
              type="password"
              placeholder="Repeat password"
              className={styles['auth-form__input']}
            />
          </label>
        )}
      </div>

      <button className={styles['auth-form__submit']}>
        {mode === 'sign up' ? 'Create an account' : 'Login to your account'}
      </button>

      <div className={styles['auth-form__toggle-mode']}>
        <span className={styles['auth-form__toggle-text']}>
          {mode === 'sign up'
            ? 'Already have an account?'
            : 'Don’t have an account?'}
        </span>
        <span className={styles['auth-form__toggle-btn']} onClick={toggleMode}>
          {mode === 'sign up' ? 'Login' : 'Sign Up'}
        </span>
      </div>
    </form>
  );
};
