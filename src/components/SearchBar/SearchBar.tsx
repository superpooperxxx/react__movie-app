import React, { Dispatch, SetStateAction } from 'react';
import styles from './SearchBar.module.scss';

interface Props {
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const SearchBar: React.FC<Props> = ({
  placeholder,
  value,
  setValue,
}) => {
  return (
    <label className={styles['search-bar']}>
      <input
        type="text"
        className={styles['search-bar__input']}
        placeholder={placeholder}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </label>
  );
};
