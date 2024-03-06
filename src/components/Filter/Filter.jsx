import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import { updateFilter } from 'redux/Contacts/filterSlice';

const Filter = () => {
  const [filterValue, setFilterValue] = useState('');
  const dispatch = useDispatch();

  const changeFilter = e => {
    const value = e.target.value;
    setFilterValue(value);
    dispatch(updateFilter(value));
  };

  return (
    <div>
      <label className={styles.filterLabel}>
        Знайти контакти за ім'ям
        <input
          className={styles.filterInput}
          type="text"
          value={filterValue}
          onChange={changeFilter}
        />
      </label>
    </div>
  );
};

export default Filter;
