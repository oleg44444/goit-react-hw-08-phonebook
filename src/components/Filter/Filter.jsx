import React from 'react';
import styles from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter, selectFilter } from '../../redux/Contacts/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const changeFilter = e => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <div>
      <label className={styles.filterLabel}>
        Знайти контакти за ім'ям
        <input
          className={styles.filterInput}
          type="text"
          value={value}
          onChange={changeFilter}
        />
      </label>
    </div>
  );
};
export default Filter;
