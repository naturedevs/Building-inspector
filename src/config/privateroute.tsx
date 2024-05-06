// PrivateRoute.tsx

import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './authcontext';

interface PrivateRouteProps {
  element: React.ReactNode;
  path:string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, path, ...rest }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Route {...rest} element={element} path={path}/> : <Navigate to="/login" />;
};

export default PrivateRoute;
