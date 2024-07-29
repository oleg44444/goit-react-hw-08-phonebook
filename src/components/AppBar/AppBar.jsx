import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../hooks/useAuth';
import ContactsIcon from '@mui/icons-material/Contacts';

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  maxWidth: '1440px',
  backgroundColor: '#007bff',
  height: '120px',
  color: 'white',

  '& .MuiToolbar-root': {
    transition: 'background-color 0.98s',
    display: 'flex',
    alignItems: 'center',
  },
}));

export const Appbar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <ContactsIcon color="inherit" sx={{ mr: 1 }} />
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            PHONEBOOK
          </Typography>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </div>
  );
};
