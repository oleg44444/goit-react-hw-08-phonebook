import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/Auth/operations';
import { useAuth } from '../hooks/useAuth';
import { styled } from '@mui/system';

const CustomButton = styled(Button)({
  backgroundColor: '#ff0000',
  color: '#ffffff',
  borderRadius: 20,
  padding: '10px 20px',
  textTransform: 'none',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#cc0000',
  },
});

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <CustomButton
        href="#text-buttons"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </CustomButton>
    </div>
  );
};
