import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuthKYS } from '../../contexts/AuthContextKYS';
import { 
  getPetKYSById, 
  updatePetKYS,
  getRacesKYS, 
  getCategoriesKYS, 
  getGendersKYS 
} from '../../services/petsServiceKYS';
import Swal from 'sweetalert2';
import '../../assets/styles/PetEditStyleKYS.css';

import defaultImage from '../../assets/images/imgs/photo-lg-0.svg';
import camIcon from '../../assets/images/imgs/icon-camera.svg';
import arrowIcon from '../../assets/images/imgs/arrows.svg';
import backIcon from '../../assets/images/imgs/btn-back.svg';
import closeIcon from '../../assets/images/imgs/btn-close.svg';

const EditPetKYS = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    raceId: '',
    categoryId: '',
    genderId: '',
    estado: 'porAdoptar',
    photo: null,
    currentPhoto: ''
  });
  const [races, setRaces] = useState([]);
  const [categories, setCategories] = useState([]);
  const [genders, setGenders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { userKYS } = useAuthKYS();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        const [petData, racesData, categoriesData, gendersData] = await Promise.all([
          getPetKYSById(id),
          getRacesKYS(),
          getCategoriesKYS(),
          getGendersKYS()
        ]);

        setRaces(racesData);
        setCategories(categoriesData);
        setGenders(gendersData);

        if (petData) {
          setFormData({
            name: petData.name,
            raceId: petData.raceId.toString(),
            categoryId: petData.categoryId.toString(),
            genderId: petData.genderId.toString(),
            estado: petData.estado,
            photo: null,
            currentPhoto: petData.photo
          });
        }
      } catch (error) {
        setError(error.message || 'Error al cargar datos');
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo cargar la información de la mascota',
          confirmButtonText: 'OK'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, photo: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('raceId', formData.raceId);
      formDataToSend.append('categoryId', formData.categoryId);
      formDataToSend.append('genderId', formData.genderId);
      formDataToSend.append('estado', formData.estado);
      
      if (formData.photo) {
        formDataToSend.append('photo', formData.photo);
      }

      await updatePetKYS(id, formDataToSend);
      
      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'Mascota actualizada correctamente',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/pets');
      });
    } catch (error) {
      setError(error.message || 'Error al actualizar la mascota');
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message || 'Error al actualizar la mascota',
        confirmButtonText: 'OK'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    Swal.fire({
      title: '¿Estás segura?',
      text: '¿Deseas cancelar y volver atrás? Los cambios no se guardarán.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cancelar',
      cancelButtonText: 'No, continuar'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/pets');
      }
    });
  };

  if (loading && !formData.name) {
    return (
      <div className="loading-container-KYS">
        <div className="loading-spinner-KYS"></div>
        <p>Cargando información de la mascota...</p>
      </div>
    );
  }

  return (
    <div className="pet-form-container-KYS">
      <div className="header-controls-KYS">
        <button className="icon-button-KYS" onClick={() => navigate('/pets')}>
          <img src={backIcon} alt="Volver" className="icon-img-KYS" />
        </button>

        <h1 className="header-title-KYS">Editar Mascota</h1>

        <button className="icon-button-KYS" onClick={handleCancel}>
          <img src={closeIcon} alt="Cancelar" className="icon-img-KYS" />
        </button>
      </div>

      <div className="pet-form-header-KYS">
        <img
          src={formData.photo ? URL.createObjectURL(formData.photo) : 
               formData.currentPhoto ? `${process.env.REACT_APP_API_URL}/img/${formData.currentPhoto}` : 
               defaultImage}
          alt="Mascota"
          className="pet-image-KYS"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = defaultImage;
          }}
        />
      </div>

      <form onSubmit={handleSubmit} className="pet-form-KYS">
        {error && <div className="error-message-KYS">{error}</div>}

        <div className="form-group-KYS">
          <div className="form-group-content-KYS">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group-KYS">
          <div className="form-group-content-KYS">
            <img src={arrowIcon} alt="icono" className="icon-img-KYS" />
            <select
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione Categoría...</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group-KYS">
          <div className="form-group-content-KYS">
            <img src={arrowIcon} alt="icono" className="icon-img-KYS" />
            <select
              name="raceId"
              value={formData.raceId}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione Raza...</option>
              {races.map(race => (
                <option key={race.id} value={race.id}>
                  {race.name}
                </option>
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
              onChange={handleFileChange}
              accept="image/*"
            />
            <small className="file-info-KYS">
              {formData.photo ? formData.photo.name : 
               formData.currentPhoto ? 'Imagen actual: ' + formData.currentPhoto : 
               'No hay imagen seleccionada'}
            </small>
          </div>
        </div>

        <div className="form-group-KYS">
          <div className="form-group-content-KYS">
            <img src={arrowIcon} alt="icono" className="icon-img-KYS" />
            <select
              name="genderId"
              value={formData.genderId}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione Género...</option>
              {genders.map(gender => (
                <option key={gender.id} value={gender.id}>
                  {gender.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group-KYS">
          <div className="form-group-content-KYS">
            <img src={arrowIcon} alt="icono" className="icon-img-KYS" />
            <select
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              required
            >
              <option value="porAdoptar">Por adoptar</option>
              <option value="Adoptado">Adoptado</option>
            </select>
          </div>
        </div>

        <button type="submit" className="submit-btn-KYS" disabled={loading}>
          {loading ? 'Guardando...' : 'Guardar Cambios'}
        </button>
      </form>
    </div>
  );
};

export default EditPetKYS;