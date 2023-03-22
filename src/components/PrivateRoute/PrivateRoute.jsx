import React from 'react';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
  //   if (!user) {
  //     return <Navigate to="/register" />;
  //   }

  return children;
};

export default PrivateRoute;
