import React, { useState, useEffect } from 'react'; 
import Swal from 'sweetalert2'
import { useAuthKYS } from '../../contexts/AuthContextKYS';
import { createPetKYS, getRacesKYS, getCategoriesKYS, getGendersKYS } from '../../services/petsServiceKYS';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/PetFormStylesKYS.css';

import defaultImage from '../../assets/images/imgs/photo-lg-0.svg';
import camIcon from '../../assets/images/imgs/icon-camera.svg';
import arrowIcon from '../../assets/images/imgs/arrows.svg';
import backIcon from '../../assets/images/imgs/btn-back.svg';
import closeIcon from '../../assets/images/imgs/btn-close.svg';

const PetFormKYS = ({ petDataKYS = null }) => {
  const [formDataKYS, setFormDataKYS] = useState({
    name: '',
    raceId: '',
    categoryId: '',
    genderId: '',
    estado: 'porAdoptar',
    photo: null
  });
  const [racesKYS, setRacesKYS] = useState([]);
  const [categoriesKYS, setCategoriesKYS] = useState([]);
  const [gendersKYS, setGendersKYS] = useState([]);
  const [loadingKYS, setLoadingKYS] = useState(false);
  const [errorKYS, setErrorKYS] = useState(null);
  const { userKYS } = useAuthKYS();
  const navigateKYS = useNavigate();

  useEffect(() => {
    const fetchOptionsKYS = async () => {
      try {
        const [racesDataKYS, categoriesDataKYS, gendersDataKYS] = await Promise.all([
          getRacesKYS(),
          getCategoriesKYS(),
          getGendersKYS()
        ]);
        setRacesKYS(racesDataKYS);
        setCategoriesKYS(categoriesDataKYS);
        setGendersKYS(gendersDataKYS);
      } catch (error) {
        setErrorKYS('Error al cargar opciones');
      }
    };

    fetchOptionsKYS();
  }, []);

  const handleChangeKYS = (e) => {
    const { name, value } = e.target;
    setFormDataKYS(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChangeKYS = (e) => {
    setFormDataKYS(prev => ({ ...prev, photo: e.target.files[0] }));
  };

  const handleSubmitKYS = async (e) => {
    e.preventDefault();
    setLoadingKYS(true);
    setErrorKYS(null);

    try {
      const formData = new FormData();
      formData.append('name', formDataKYS.name);
      formData.append('raceId', formDataKYS.raceId);
      formData.append('categoryId', formDataKYS.categoryId);
      formData.append('genderId', formDataKYS.genderId);
      formData.append('estado', formDataKYS.estado);
      formData.append('user_Id', userKYS.id);

      if (formDataKYS.photo) {
        formData.append('photo', formDataKYS.photo);
      } else {
        const response = await fetch(defaultImage);
        const blob = await response.blob();
        const defaultFile = new File([blob], 'defaultImage.svg', { type: blob.type });
        formData.append('photo', defaultFile);
      }

      await createPetKYS(formData);
      navigateKYS('/pets');
    } catch (error) {
      setErrorKYS(error.message || 'Error al guardar la mascota');
    } finally {
      setLoadingKYS(false);
    }
  };

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
    <div className="pet-form-container-KYS">
      <div className="header-controls-KYS">
        <button className="icon-button-KYS" onClick={() => window.history.back()}>
          <img src={backIcon} alt="Volver" className="icon-img-KYS" />
        </button>

        <h1 className="header-title-KYS">
          {petDataKYS ? 'Editar Mascota' : 'Registrar Mascota'}
        </h1>

        <button className="icon-button-KYS" onClick={handleCancel}>
          <img src={closeIcon} alt="Cancelar" className="icon-img-KYS" />
        </button>
      </div>

      <div className="pet-form-header-KYS">
        <img
          src={formDataKYS.photo ? URL.createObjectURL(formDataKYS.photo) : defaultImage}
          alt="Mascota"
          className="pet-image-KYS"
        />
      </div>

      <form onSubmit={handleSubmitKYS} className="pet-form-KYS">
        {errorKYS && <div className="error-message-KYS">{errorKYS}</div>}

        <div className="form-group-KYS">
          <div className="form-group-content-KYS">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formDataKYS.name}
              onChange={handleChangeKYS}
              required
            />
          </div>
        </div>

        <div className="form-group-KYS">
          <div className="form-group-content-KYS">
            <img src={arrowIcon} alt="icono" className="icon-img-KYS" />
            <select
              name="categoryId"
              value={formDataKYS.categoryId}
              onChange={handleChangeKYS}
              required
            >
              <option value="">Seleccione Categoría...</option>
              {categoriesKYS.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group-KYS">
          <div className="form-group-content-KYS">
            <img src={arrowIcon} alt="icono" className="icon-img-KYS" />
            <select
              name="raceId"
              value={formDataKYS.raceId}
              onChange={handleChangeKYS}
              required
            >
              <option value="">Seleccione Raza...</option>
              {racesKYS.map(race => (
                <option key={race.id} value={race.id}>{race.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group-KYS">
          <div className="form-group-content-KYS">
            <img src={camIcon} alt="camara" className="icon-img-KYS" />
            <input
              type="file"
              name="photo"
              onChange={handleFileChangeKYS}
              accept="image/*"
            />
          </div>
        </div>

        <div className="form-group-KYS">
          <div className="form-group-content-KYS">
            <img src={arrowIcon} alt="icono" className="icon-img-KYS" />
            <select
              name="genderId"
              value={formDataKYS.genderId}
              onChange={handleChangeKYS}
              required
            >
              <option value="">Seleccione Género...</option>
              {gendersKYS.map(gender => (
                <option key={gender.id} value={gender.id}>{gender.name}</option>
              ))}
            </select>
          </div>
        </div>

        <button type="submit" className="submit-btn-KYS" disabled={loadingKYS}>
          {loadingKYS ? 'Guardando...' : 'Guardar'}
        </button>
      </form>
    </div>
  );
};

export default PetFormKYS;
