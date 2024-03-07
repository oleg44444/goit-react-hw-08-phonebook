import React from 'react';
import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/Contacts/contactsSlice';
import { selectFilter } from '../../redux/Contacts/filterSlice';
import { Card, Grid } from '@mui/material';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';

const ContactList = () => {
  const { data, refetch } = useGetContactsQuery();
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const filterItems = useSelector(selectFilter);

  const handleDeleteContact = async id => {
    await deleteContact({ id });
    refetch();
  };

  const normalizedFilter = filterItems.toLowerCase();
  const filteredContacts = data
    ? data.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      )
    : [];

  return (
    <Grid container spacing={2}>
      {filteredContacts.map(({ id, number, name }) => (
        <Grid
          item
          xs="12"
          justifyContent="center"
          alignItems="center"
          key={id}
          className={styles.contactItem}
        >
          <Card>
            <Avatar
              sx={{ bgcolor: blue[600] }}
              alt={name}
              src="/broken-image.jpg"
            />
            <p className={styles.contactDetails}>
              {name}: {number}
            </p>
            <DeleteForeverIcon
              type="button"
              onClick={() => handleDeleteContact(id)}
              disabled={isLoading}
            >
              Видалити
            </DeleteForeverIcon>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ContactList;
