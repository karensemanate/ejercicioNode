// src/components/common/HeaderKYS.js
import React from 'react';
import { useAuthKYS } from '../../contexts/AuthContextKYS';
import { Link } from 'react-router-dom';

const HeaderKYS = () => {
  const { userKYS, logoutKYS } = useAuthKYS();
  
  return (
    <header className="header-KYS">
      <div className="header-content-KYS">
        <Link to="/pets" className="logo-KYS">
          Tu mejor amigo en Casal
        </Link>
        {userKYS && (
          <button onClick={logoutKYS} className="logout-btn-KYS">
            Cerrar sesión
          </button>
        )}
      </div>
    </header>
  );
};

export default HeaderKYS;