// src/components/common/BackgroundKYS.js
import React from 'react';
import backgroundImageKYS from '../../assets/images/background-login-KYS.jpg';
import './backgroundStylesKYS.css';

const BackgroundKYS = ({ children }) => {
  return (
    <div className="background-container-KYS">
      <img 
        src={backgroundImageKYS} 
        alt="Background" 
        className="background-image-KYS"
      />
      <div className="content-overlay-KYS">
        {children}
      </div>
    </div>
  );
};

export default BackgroundKYS;