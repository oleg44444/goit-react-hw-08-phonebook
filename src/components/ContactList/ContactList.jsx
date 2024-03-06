import React from 'react';
import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/Contacts/contactsSlice';
import { selectFilter } from '../../redux/Contacts/filterSlice';

const ContactList = () => {
  const { data, refetch } = useGetContactsQuery(); // Додали refetch до деструктуризації
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const filterItems = useSelector(selectFilter);

  const handleDeleteContact = async id => {
    await deleteContact({ id });
    refetch(); // Викликаємо refetch після видалення контакту
  };

  const normalizedFilter = filterItems.toLowerCase();
  const filteredContacts = data
    ? data.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      )
    : [];

  return (
    <ul>
      {filteredContacts.map(({ id, number, name }) => (
        <li key={id} className={styles.contactItem}>
          <p className={styles.contactDetails}>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => handleDeleteContact(id)}
            className={styles.deleteButton}
            disabled={isLoading}
          >
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
