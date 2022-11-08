import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../utility/AuthProvider";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  if(loading){
    return <Spinner animation="border" variant="success" />
  }
  if (!user) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
