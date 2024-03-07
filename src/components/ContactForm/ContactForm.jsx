import React, { useState } from 'react';
import styles from './ContactForm.module.css';

import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../redux/Contacts/contactsSlice';
import { TextField } from '@mui/material';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact, { isLoading, isError, error }] = useAddContactMutation();
  const { refetch } = useGetContactsQuery();

  const handleChange = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    } else if (target.name === 'number') {
      setNumber(target.value);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!name || !number) {
      console.error('Error adding contact: Missing required fields');
      return;
    }

    console.log('Submitting:', { name: name, number: number });

    try {
      await addContact({ name: name, number: number });
      refetch();
    } catch (error) {
      console.error('Error adding contact:', error);
    }

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      {isError && <div className={styles.error}>{error?.message}</div>}

      <label htmlFor="name" className={styles.label}>
        <TextField
          name="name"
          variant="standard"
          label="name"
          type="text"
          value={name}
          className={styles.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Ім'я може містити лише літери, апостроф, тире та пробіли. Наприклад, Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label htmlFor="number" className={styles.label}>
        <TextField
          name="number"
          variant="standard"
          label="number"
          type="tel"
          value={number}
          className={styles.input}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Номер телефону повинен бути цифрами і може містити пробіли, тире, круглі дужки та може починатися з +"
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={styles.button} disabled={isLoading}>
        {isLoading ? 'Додається...' : 'Додати контакт'}
      </button>
    </form>
  );
};

export default ContactForm;
