import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { useAuthKYS } from '../../contexts/AuthContextKYS';
import LoginFormKYS from '../../components/auth/LoginFormKYS';
import '../../assets/styles/authStylesKYS.css';

const LoginKYS = () => {
  const { loginKYS, errorKYS } = useAuthKYS();
  const [loadingKYS, setLoadingKYS] = useState(false);
  //const navigateKYS = useNavigate();

  const handleSubmitKYS = async (credentialsKYS) => {
    setLoadingKYS(true);
    try {
      await loginKYS(credentialsKYS);
    } finally {
      setLoadingKYS(false);
    }
  };

  return (
    <div className="auth-page-container-KYS">
      <div className="login-container-KYS">
        <div className="login-header-KYS">
        </div>
        <LoginFormKYS 
          onSubmitKYS={handleSubmitKYS} 
          errorKYS={errorKYS} 
          loadingKYS={loadingKYS} 
        />
      </div>
    </div>
  );
};

export default LoginKYS;
