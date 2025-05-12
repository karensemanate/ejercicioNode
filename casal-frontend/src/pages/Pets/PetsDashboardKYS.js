import React, { useState, useEffect } from 'react';
import { useAuthKYS } from '../../contexts/AuthContextKYS';
import { getPetsKYS, deletePetKYS } from '../../services/petsServiceKYS';
import { Link } from 'react-router-dom';
import '../../assets/styles/petsStylesKYS.css';
import Swal from 'sweetalert2';
import showIcon from '../../assets/images/imgs/btn-show.svg';
import editIcon from '../../assets/images/imgs/btn-edit.svg';
import deleteIcon from '../../assets/images/imgs/btn-delete.svg';
import defaultImage from '../../assets/images/imgs/photo-lg-0.svg';
import closeIcon from '../../assets/images/imgs/btn-close.svg';

const PetsDashboardKYS = () => {
  const [petsKYS, setPetsKYS] = useState([]);
  const [loadingKYS, setLoadingKYS] = useState(true);
  const { logoutKYS } = useAuthKYS();

  const getPetImageUrl = (photo) => {
    if (!photo) return defaultImage;

    if (/^https?:\/\//.test(photo) || /^data:image\//.test(photo)) {
      return photo;
    }

    return `${process.env.REACT_APP_API_URL}/img/${photo}`;
  };

  useEffect(() => {
    const fetchPetsKYS = async () => {
      try {
        const dataKYS = await getPetsKYS();
        const petsWithImageUrl = dataKYS.map(pet => ({
          ...pet,
          imageUrl: getPetImageUrl(pet.photo)
        }));
        setPetsKYS(petsWithImageUrl);
      } catch (error) {
        console.error("Error fetching pets:", error);
      } finally {
        setLoadingKYS(false);
      }
    };
    fetchPetsKYS();
  }, []);

  const handleDeleteKYS = async (id) => {
    try {
      await deletePetKYS(id);
      setPetsKYS(petsKYS.filter(pet => pet.id !== id));
      Swal.fire('Eliminado', 'La mascota ha sido eliminada.', 'success');
    } catch (error) {
      console.error("Error deleting pet:", error);
      Swal.fire('Error', 'No se pudo eliminar la mascota.', 'error');
    }
  };

  const handleCancel = () => {
    Swal.fire({
      title: '¿Estás segura?',
      text: '¿Deseas cancelar y cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cancelar',
      cancelButtonText: 'No, continuar'
    }).then((result) => {
      if (result.isConfirmed) {
        logoutKYS();
      }
    });
  };

  const handleEliminar = (pet) => {
    Swal.fire({
      title: '¿Estás segur@?',
      text: '¿Deseas eliminar esta mascota?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteKYS(pet.id);
      }
    });
  };

  if (loadingKYS) return <div className="loading-KYS">Cargando mascotas...</div>;

  return (
    <div className="pets-admin-container-KYS">
      <div className="pets-header-KYS">
        <h1>Administrar Mascotas</h1>

        <button className="icon-button-KYS" onClick={handleCancel}>
          <img src={closeIcon} alt="Cancelar" className="icon-img-KYS" />
        </button>
      </div>

      <br />

      <div className="adicionar-mascota-KYS">
        <Link to="/pets/new" className="add-pet-btn-KYS">
          <span className="icon">+</span> Adicionar
        </Link>
      </div>

      <div className="adicionar-mascota-KYS">
        <Link to="/pets/reports" className="add-pet-btn-KYS">
          <span className="icon">+</span> Reportes
        </Link>
      </div>

      <br />

      <div className="pets-list-KYS">
        {petsKYS.map(pet => (
          <div key={pet.id} className="pet-card-KYS">
            <img
              src={pet.imageUrl}
              alt={pet.name}
              className="pet-image-KYS"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultImage;
              }}
            />

            <div className="pet-info-KYS">
              <span className="pet-name-KYS">{pet.name}</span>
              <span className="pet-breed-KYS">{pet.race?.name || 'Sin raza'}</span>
            </div>

            <div className="pet-actions-KYS">
              <Link to={`/pets/${pet.id}`} className="action-btn-KYS">
                <img src={showIcon} alt="ver" className="icon-img-KYS" />
              </Link>
              <Link to={`/pets/${pet.id}/edit`} className="action-btn-KYS">
                <img src={editIcon} alt="editar" className="icon-img-KYS" />
              </Link>
              <button onClick={() => handleEliminar(pet)} className="action-btn-KYS">
                <img src={deleteIcon} alt="eliminar" className="icon-img-KYS" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <br />
    </div>
  );
};

export default PetsDashboardKYS;
