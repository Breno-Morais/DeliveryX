import React from "react";
import { useSelector } from 'react-redux';
import Loading from '../pages/Loading';

import {
  Navigate,
  useLocation
} from "react-router-dom";

function PrivateRoute({ children, type }) {
  const { token, loading } = useSelector((state) => state.auth);
  const location = useLocation();

  if (loading) {
    return <Loading />
  }

  if (token) {
    return children
  }

  switch(type){
    case 'entregador':
      return <Navigate to='/loginCourier' state={{ from: location }} replace />;
    case 'usuario':
      return <Navigate to='/login' state={{ from: location }} replace />;
    case 'admin':
      return <Navigate to='/loginAdmin' state={{ from: location }} replace />;
    default:
      return <Navigate to='/' state={{ from: location }} replace />;
  }
}

export default PrivateRoute;