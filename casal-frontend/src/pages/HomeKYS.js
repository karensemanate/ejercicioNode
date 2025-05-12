import React from 'react';
import { Link } from 'react-router-dom';

const HomeKYS = () => {
  return (
    <div className="home-container-KYS">
      <h1>Bienvenido a Casal</h1>
      <p>Tu aplicación para encontrar a tu mejor amigo</p>
      <Link to="/login" className="login-link-KYS">Iniciar sesión</Link>
    </div>
  );
};

export default HomeKYS;