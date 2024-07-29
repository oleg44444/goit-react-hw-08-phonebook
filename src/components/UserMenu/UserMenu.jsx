import { Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/Auth/operations';
import { useAuth } from '../hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div
      style={{
        marginLeft: '20px',
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'flex-start',
        gap: '15px',
        padding: '15px', 
        backgroundColor: 'inherit',
        borderRadius: '8px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Typography 
        variant="h6" 
        component="p" 
        sx={{
          color: '#ffffff', 
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom: 0,
        }}
      >
        Welcome, {user.name}
      </Typography>
      <Button
        type="button"
        onClick={() => dispatch(logOut())}
        sx={{
          padding: '10px 20px',
          borderRadius: 20,
          border: '1px solid #ff5722',
          backgroundColor: '#ff5722',
          color: '#ffffff',
          textTransform: 'none',
          boxShadow: 'none',
          fontSize: '16px',
          fontWeight: 'bold',
          transition: 'background-color 0.3s, color 0.3s',
          '&:hover': {
            backgroundColor: '#e64a19',
            color: '#ffffff',
          },
        }}
      >
        Logout
      </Button>
    </div>
  );
};
