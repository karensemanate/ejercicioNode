import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginKYS as apiLoginKYS, getProfileKYS } from '../services/apiKYS';

const AuthContextKYS = createContext();

export const AuthProviderKYS = ({ children }) => {
  const [userKYS, setUserKYS] = useState(null);
  const [loadingKYS, setLoadingKYS] = useState(true);
  const [errorKYS, setErrorKYS] = useState(null);
  const navigateKYS = useNavigate();

  const logoutKYS = useCallback(() => {
    localStorage.removeItem(process.env.REACT_APP_TOKEN_NAME);
    setUserKYS(null);
    navigateKYS('/login');
  }, [navigateKYS]);

  const loginKYS = useCallback(async (credentialsKYS) => {
    try {
      setErrorKYS(null);
      const { token, user } = await apiLoginKYS(credentialsKYS);
      
      localStorage.setItem(process.env.REACT_APP_TOKEN_NAME, token);
      setUserKYS(user);
      navigateKYS('/pets');
      return true;
    } catch (errKYS) {
      setErrorKYS(errKYS.message || 'Credenciales incorrectas');
      return false;
    }
  }, [navigateKYS]);

  useEffect(() => {
    const loadUserKYS = async () => {
      try {
        const tokenKYS = localStorage.getItem(process.env.REACT_APP_TOKEN_NAME);
        if (tokenKYS) {
          const { user } = await getProfileKYS();
          setUserKYS(user);
        }
      } catch (errKYS) {
        logoutKYS();
      } finally {
        setLoadingKYS(false);
      }
    };
    
    loadUserKYS();
  }, [logoutKYS]);

  return (
    <AuthContextKYS.Provider
      value={{
        userKYS,
        loadingKYS,
        errorKYS,
        loginKYS,
        logoutKYS,
      }}
    >
      {children}
    </AuthContextKYS.Provider>
  );
};

export const useAuthKYS = () => {
  const context = useContext(AuthContextKYS);
  if (!context) {
    throw new Error('useAuthKYS debe usarse dentro de AuthProviderKYS');
  }
  return context;
};