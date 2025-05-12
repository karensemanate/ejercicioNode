import React, { useState } from 'react';

const LoginFormKYS = ({ onSubmitKYS, errorKYS, loadingKYS }) => {
  const [credentialsKYS, setCredentialsKYS] = useState({
    email: '',
    password: '',
  });

  const handleChangeKYS = (e) => {
    const { name, value } = e.target;
    setCredentialsKYS((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitKYS = (e) => {
    e.preventDefault();
    onSubmitKYS(credentialsKYS);
  };

  return (
    <form className="login-form-KYS" onSubmit={handleSubmitKYS}>
      <div className="form-group-KYS">
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={credentialsKYS.email}
          onChange={handleChangeKYS}
          required
        />
      </div>
      <br />

      <div className="form-group-KYS">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentialsKYS.password}
          onChange={handleChangeKYS}
          required
        />
      </div>
      <br />

      {errorKYS && <div className="error-message-KYS">{errorKYS}</div>}

      <button type="submit" className="login-button-KYS" disabled={loadingKYS}>
        {loadingKYS ? 'Cargando...' : 'Ingresar'}
      </button>
    </form>
  );
};

export default LoginFormKYS;