import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../hooks/useAuth';
export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
