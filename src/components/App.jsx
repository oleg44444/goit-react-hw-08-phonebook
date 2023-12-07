import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Contacts from './pages/Contacts';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivatRoute';

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index="/" element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
          </Route>
        </Routes>
      </div>
    </div>
  );
};
export default App;
