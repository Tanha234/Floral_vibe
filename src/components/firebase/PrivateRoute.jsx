import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ component: Component, restrictedRoles, ...rest }) => {
  const { user, loading } = useAuth();

  // If the user is loading or not authenticated, return a loading screen or redirect
  if (loading) {
    return <div>Loading...</div>;
  }

  // If user is not logged in or doesn't have access based on roles
  if (!user || (restrictedRoles && restrictedRoles.includes(user.role))) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default PrivateRoute;
