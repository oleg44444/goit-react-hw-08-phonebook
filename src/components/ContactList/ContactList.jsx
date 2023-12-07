// ContactList.js
import React from 'react';
import style from './ContactList.module.css';
import { selectFilter } from '../../redux/Contacts/filterSlice';
import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/Contacts/contactsSlice';

const ContactList = () => {
  const { data } = useGetContactsQuery();
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const filterItems = useSelector(selectFilter);

  const normalizedFilter = filterItems.toLowerCase();

  const filteredContacts = (data || []).filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul>
      {filteredContacts.map(({ id, number, name }) => (
        <li key={id} className={style.contactItem}>
          <p className={style.contactDetails}>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => deleteContact({ id })}
            className={style.deleteButton}
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
