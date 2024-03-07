import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/index';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {isLoggedIn ? (
        <>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/">Home</NavLink>
        </>
      )}
    </nav>
  );
};
