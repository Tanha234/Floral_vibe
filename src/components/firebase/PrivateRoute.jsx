// components/firebase/PrivateRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children, user }) => {
  const location = useLocation();

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
