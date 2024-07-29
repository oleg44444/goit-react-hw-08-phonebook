import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import { updateFilter } from 'redux/Contacts/filterSlice';
import { TextField } from '@mui/material';

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
        <TextField
          sx={{ 
            mb: '1.5rem', 
            width: '100%',  // Розширює ширину до 100% батьківського контейнера
            maxWidth: 400   // Можна задати максимальну ширину, якщо потрібно
          }}
          label="Search"
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
