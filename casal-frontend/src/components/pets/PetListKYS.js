import React, { useState, useEffect } from 'react';
import { getPetsKYS, deletePetKYS } from '../../services/petsServiceKYS';
import { useAuthKYS } from '../../contexts/AuthContextKYS';
import { Link } from 'react-router-dom';
import '../../assets/styles/petsStylesKYS.css';

import closeIcon from '../../assets/images/imgs/btn-close.svg';

const PetListKYS = () => {
  const [petsKYS, setPetsKYS] = useState([]);
  const [loadingKYS, setLoadingKYS] = useState(true);
  const [errorKYS, setErrorKYS] = useState(null);
  const { logoutKYS } = useAuthKYS();

  useEffect(() => {
    const fetchPetsKYS = async () => {
      try {
        const dataKYS = await getPetsKYS();
        setPetsKYS(dataKYS);
      } catch (errKYS) {
        setErrorKYS(errKYS.message);
      } finally {
        setLoadingKYS(false);
      }
    };
    fetchPetsKYS();
  }, []);

  const handleDeleteKYS = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar esta mascota?")) {
      try {
        await deletePetKYS(id);
        setPetsKYS(petsKYS.filter(pet => pet.id !== id));
      } catch (errKYS) {
        setErrorKYS(errKYS.message);
      }
    }
  };

  if (loadingKYS) return <div className="loading-KYS">Cargando mascotas...</div>;
  if (errorKYS) return <div>Error: {errorKYS}</div>;

  return (
    <div className="pets-admin-container-KYS">
      <div className="pets-header-KYS">
        <h1>Administrar Mascotas</h1>

        <button className="icon-button-KYS" onClick={handleCancel}>
          <img src={closeIcon} alt="Cancelar" className="icon-img-KYS" />
        </button>
      </div>


      <div className="pets-list-KYS">
        {petsKYS.map(pet => (
          <div key={pet.id} className="pet-card-KYS">
            <div className="pet-info-KYS">
              <span className="pet-name-KYS">{pet.name}</span>
              <span className="pet-breed-KYS">{pet.race?.name || 'Sin raza'}</span>
            </div>
            <div className="pet-actions-KYS">
              <Link to={`/pets/${pet.id}/edit`} className="edit-btn-KYS">Editar</Link>
              <button onClick={() => handleDeleteKYS(pet.id)} className="delete-btn-KYS">Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetListKYS;
