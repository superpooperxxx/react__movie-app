import React, { ChangeEvent, FocusEventHandler } from 'react';
import cn from 'classnames';

import styles from './InputItem.module.scss';

interface Props {
  touched: boolean | undefined;
  error: string | undefined;
  id: string;
  type?: string;
  placeholder: string;
  value: string;
  handleChange: (e: ChangeEvent) => void;
  handleBlur: FocusEventHandler<HTMLInputElement>;
}

export const InputItem: React.FC<Props> = ({
  touched,
  error,
  id,
  type,
  placeholder,
  value,
  handleChange,
  handleBlur,
}) => (
  <label
    className={cn(styles['input-item'], {
      [styles['input-item--error']]: touched && error,
    })}
  >
    {error && (
      <span className={styles['input-item__error-message']}>
        {touched && error}
      </span>
    )}

    <input
      autoComplete="off"
      className={styles['input-item__input']}
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  </label>
);

InputItem.defaultProps = {
  type: 'text',
};
