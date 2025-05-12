import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom';
import { getPetKYSById } from '../../services/petsServiceKYS';
import { useAuthKYS } from '../../contexts/AuthContextKYS';
import '../../assets/styles/PetDetailsStylesKYS.css';

import defaultImage from '../../assets/images/imgs/photo-lg-0.svg';
import backIcon from '../../assets/images/imgs/btn-back.svg';
import closeIcon from '../../assets/images/imgs/btn-close.svg';

const PetDetailsKYS = () => {
  const { id } = useParams();
  const [petKYS, setPetKYS] = useState(null);
  const [loadingKYS, setLoadingKYS] = useState(true);
  const [errorKYS, setErrorKYS] = useState(null);
  const { userKYS } = useAuthKYS();

  useEffect(() => {
    const fetchPetKYS = async () => {
      try {
        const petDataKYS = await getPetKYSById(id);
        setPetKYS(petDataKYS);
      } catch (error) {
        setErrorKYS(error.message || 'Error al cargar la mascota');
      } finally {
        setLoadingKYS(false);
      }
    };

    fetchPetKYS();
  }, [id]);

  const getPetImage = () => {
    if (!petKYS?.photo) return defaultImage;
    
    if (/^https?:\/\//.test(petKYS.photo) || /^data:image\//.test(petKYS.photo)) {
      return petKYS.photo;
    }
    
    return `${process.env.REACT_APP_API_URL}/img/${petKYS.photo}`;
  };

  if (loadingKYS) return <div className="loading-KYS">Cargando mascota...</div>;
  if (errorKYS) return <div className="error-KYS">{errorKYS}</div>;
  if (!petKYS) return <div className="not-found-KYS">Mascota no encontrada</div>;
   

  const handleCancel = () => {
    Swal.fire({
      title: '¿Estás segura?',
      text: '¿Deseas cancelar y volver atrás?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cancelar',
      cancelButtonText: 'No, continuar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.history.back();
      }
    });
  };
  return (
    <div className="pet-details-container-KYS">
      <div className="pet-details-header-KYS">
        <div className="header-controls-KYS">
          <button className="icon-button-KYS" onClick={() => window.history.back()}>
            <img src={backIcon} alt="Volver" className="icon-img-KYS" />
          </button>
  
          <h1 className="header-title-KYS">Consultar Mascota</h1>
  
          <button className="icon-button-KYS" onClick={handleCancel}>
            <img src={closeIcon} alt="Cancelar" className="icon-img-KYS" />
          </button>
        </div>
  
        <img
          src={getPetImage()}
          alt={petKYS.name}
          className="pet-image-KYS"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = defaultImage;
          }}
        />
      </div>
  
      <div className="pet-details-content-KYS">
        <div className="detail-row-KYS">
          <label>Nombre:</label>
          <div className="detail-value-KYS">{petKYS.name}</div>
        </div>
        <div className="detail-row-KYS">
          <label>Categoria:</label>
          <div className="detail-value-KYS">{petKYS.category?.name || 'No especificado'}</div>
        </div>
        <div className="detail-row-KYS">
          <label>Raza:</label>
          <div className="detail-value-KYS">{petKYS.race?.name || 'No especificado'}</div>
        </div>
        <div className="detail-row-KYS">
          <label>Genero:</label>
          <div className="detail-value-KYS">{petKYS.gender?.name || 'No especificado'}</div>
        </div>
        <div className="detail-row-KYS">
          <label>Estado:</label>
          <div className="detail-value-KYS">
            {petKYS.estado === 'Adoptado' ? 'Adoptado' : 'Por adoptar'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetailsKYS;