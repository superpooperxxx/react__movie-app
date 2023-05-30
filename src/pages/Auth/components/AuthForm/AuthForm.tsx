import { useState } from 'react';
import { useFormik } from 'formik';
import styles from './AuthForm.module.scss';

// Validation
import { loginValidationSchema } from './formValidation/loginValidation';
import { signupValidationSchema } from './formValidation/signupValidation';
import { InputItem } from '../InputItem';

export const AuthForm = () => {
  const [mode, setMode] = useState<'sign up' | 'login'>('sign up');

  const toggleMode = () => {
    setMode((currentMode) => (currentMode === 'login' ? 'sign up' : 'login'));
  };

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: () => {
        console.log('submit');
      },
      validationSchema:
        mode === 'login' ? loginValidationSchema : signupValidationSchema,
    });

  return (
    <form className={styles['auth-form']} onSubmit={handleSubmit}>
      <h2 className={styles['auth-form__title']}>
        {mode === 'sign up' ? 'Sign Up' : 'Login'}
      </h2>

      <div className={styles['auth-form__inputs']}>
        <InputItem
          id="email"
          placeholder="Email address"
          touched={touched.email}
          error={errors.email}
          value={values.email}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />

        <InputItem
          id="password"
          placeholder="Password"
          type="password"
          touched={touched.password}
          error={errors.password}
          value={values.password}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />

        {mode === 'sign up' && (
          <InputItem
            id="confirmPassword"
            placeholder="Repeat password"
            type="password"
            touched={touched.confirmPassword}
            error={errors.confirmPassword}
            value={values.confirmPassword}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        )}
      </div>

      <button type="submit" className={styles['auth-form__submit']}>
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
