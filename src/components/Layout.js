import { Outlet } from 'react-router-dom';

import { Appbar } from './AppBar/AppBar';

import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <Appbar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
