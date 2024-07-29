import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {isLoggedIn ? (
        <>
          <Button
            component={NavLink}
            to="/"
            color="inherit"
            sx={{
              marginRight: 2,
              padding: '10px 20px',
              borderRadius: 3,
              border: '1px solid #fff',
              transition: 'background-color 0.3s, color 0.3s',
              '&:hover': {
                backgroundColor: '#0056b3',
                color: '#fff',
              },
              '&:active':{backgroundColor: '#007bff',
                color: '#fff',}
            }}
          >
            Home
          </Button>
          <Button
            component={NavLink}
            to="/contacts"
            color="inherit"
            sx={{
              padding: '10px 20px',
              borderRadius: 3,
              border: '1px solid #fff',
              transition: 'background-color 0.3s, color 0.3s',
              '&:hover': {
                backgroundColor: '#0056b3',
                color: '#fff',
              },
              '&.active': {
                backgroundColor: '#007bff',
                color: '#fff',
              },
            }}
          >
            Contacts
          </Button>
        </>
      ) : (
        <Button
          component={NavLink}
          to="/"
          color="inherit"
          sx={{
            marginRight: 2,
            padding: '10px 20px',
            borderRadius: 3,
            border: '1px solid #fff',
            transition: 'background-color 0.3s, color 0.3s',
            '&:hover': {
              backgroundColor: '#0056b3',
              color: '#fff',
            },
          }}
        >
          Home
        </Button>
      )}
    </nav>
  );
};
