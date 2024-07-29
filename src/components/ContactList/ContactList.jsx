import React from 'react';
import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/Contacts/contactsSlice';
import { selectFilter } from '../../redux/Contacts/filterSlice';
import { Card, Grid, Typography, IconButton, Avatar, Box } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
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
  
  
  const sortedContacts = data
    ? data.slice().sort((a, b) => a.name.localeCompare(b.name))
    : [];

  const filteredContacts = sortedContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Grid container spacing={2}>
      {filteredContacts.map(({ id, number, name }) => (
        <Grid
          item
          xs={12} 
          key={id}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Card sx={{ display: 'flex', alignItems: 'center', padding: 2, width: '100%' }}>
            <Avatar sx={{ bgcolor: blue[600], marginRight: 2 }} alt={name}>
              {name.charAt(0).toUpperCase()}
            </Avatar>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="body1"
                component="span"
                sx={{ fontWeight: 'bold', marginRight: 1 }}
              >
                {name}:
              </Typography>
              <Typography
                variant="body1"
                component="span"
                sx={{ color: 'text.secondary' }}
              >
                {number}
              </Typography>
            </Box>
            <IconButton
              onClick={() => handleDeleteContact(id)}
              disabled={isLoading}
              sx={{ marginLeft: 'auto' }}
            >
              <DeleteForeverIcon color="error" />
            </IconButton>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ContactList;
