import React from 'react';
import { useAuthKYS } from '../contexts/AuthContextKYS';

const DashboardKYS = () => {
  const { userKYS, logoutKYS } = useAuthKYS();

  return (
    <div className="dashboard-container-KYS">
      <h1>Bienvenido, {userKYS?.email}</h1>
      <button onClick={logoutKYS} className="logout-button-KYS">
        Cerrar sesión
      </button>
    </div>
  );
};

export default DashboardKYS;