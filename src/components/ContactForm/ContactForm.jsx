import React, { useState } from 'react';
import styles from './ContactForm.module.css';

import { useAddContactMutation } from '../../redux/Contacts/contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setPhone] = useState('');
  const [addContact, { isLoading }] = useAddContactMutation();

  const handleChange = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    } else if (target.name === 'number') {
      setPhone(target.value);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await addContact({ name, number });
    } catch (error) {
      console.error('Error adding contact:', error);
    }

    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      {/* {error && <div className={styles.error}>{error}</div>} */}

      <label htmlFor="name" className={styles.label}>
        Ім'я
        <input
          type="text"
          name="name"
          value={name}
          className={styles.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Ім'я може містити лише літери, апостроф, тире та пробіли. Наприклад, Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label htmlFor="phone" className={styles.label}>
        Телефон
        <input
          type="tel"
          name="number"
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
