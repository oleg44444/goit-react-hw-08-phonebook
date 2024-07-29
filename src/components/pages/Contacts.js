import React from 'react';
import { Box, Typography } from '@mui/material';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

export default function Contacts() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 3, height: '100vh', overflow: 'hidden' }}>
      
      <Box sx={{ flex: 1, maxWidth: 400, marginRight: 2 }}>
        <Typography 
          variant="h4" 
          component="h1" 
          sx={{ 
            fontWeight: 'bold', 
            mb: 2, 
            fontSize: '1.75rem',
            color: '#007bff', 
            textAlign: 'center'
          }}
        >
          Add Contact
        </Typography>
        <ContactForm />
      </Box>

      <Box sx={{ flex: 2, maxWidth: 800, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Box sx={{ flex: '0 1 auto', mb: 2 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              fontWeight: 'bold', 
              mb: 1, 
              fontSize: '1.75rem',
              color: '#007bff', 
              textAlign: 'center',
              marginBottom: '16px',
            }}
          >
            Contacts
          </Typography>
          <Filter />
        </Box>
        <Box sx={{ flex: '1 1 auto', overflowY: 'auto' }}>
          <ContactList />
        </Box>
      </Box>
    </Box>
  );
}
