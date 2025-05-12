// src/components/common/PrivateRouteKYS.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthKYS } from '../../contexts/AuthContextKYS';

const PrivateRouteKYS = ({ children }) => {
  const { userKYS, loadingKYS } = useAuthKYS();

  if (loadingKYS) {
    return <div className="loading-container-KYS">Cargando...</div>;
  }

  return userKYS ? children : <Navigate to="/login" replace />;
};

export default PrivateRouteKYS;