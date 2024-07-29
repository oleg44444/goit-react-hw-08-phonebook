import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <>
      <Button
        component={NavLink}
        to="/register"
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
          '&.active': {
            backgroundColor: '#007bff',
            color: '#zzz',
          },
        }}
      >
        Register
      </Button>
      <Button
        component={NavLink}
        to="/login"
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
            color: '#zzz',
          },
        }}
      >
        Log In
      </Button>
    </>
  );
};
