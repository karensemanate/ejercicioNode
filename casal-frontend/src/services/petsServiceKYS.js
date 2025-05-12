import apiKYS from './apiKYS';

export const getPetsKYS = async () => {
  try {
    const response = await apiKYS.get('/petsKYS');
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Error al obtener mascotas';
  }
};

export const createPetKYS = async (petData) => {
  try {
    const response = await apiKYS.post('/petsKYS', petData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Error al crear mascota';
  }
};

export const updatePetKYS = async (id, petData) => {
  try {
    const response = await apiKYS.put(`/petsKYS/${id}`, petData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Error al actualizar mascota';
  }
};

export const deletePetKYS = async (id) => {
  try {
    const response = await apiKYS.delete(`/petsKYS/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Error al eliminar mascota';
  }
};

export const getRacesKYS = async () => {
  try {
    const response = await apiKYS.get('/raceKYS');
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Error al obtener razas';
  }
};

export const getCategoriesKYS = async () => {
  try {
    const response = await apiKYS.get('/categoryKYS');
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Error al obtener categorías';
  }
};

export const getGendersKYS = async () => {
  try {
    const response = await apiKYS.get('/genderKYS');
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Error al obtener géneros';
  }
};

export const getPetKYSById = async (id) => {
  try {
    const response = await apiKYS.get(`/petsKYS/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Error al obtener la mascota';
  }
};


// Reportes

export const getPetsByStatusReportKYS = async () => {
  try {
    const response = await apiKYS.get('/petsKYS/reportes/estado');
    return response.data; 
  } catch (error) {
    throw error.response?.data?.message || 'Error al obtener reporte por estado';
  }
};

export const getPetsByRaceAndCategoryReportKYS = async () => {
  try {
    const response = await apiKYS.get('/petsKYS/reportes/raza-categoria');
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'Error al obtener reporte por raza y categoría';
  }
};

export const getPetsByGenderKYS = async () => {
  try {
    const response = await apiKYS.get('/petsKYS/reportes/genero');
    return response.data; 
  } catch (error) {
    throw error.response?.data?.message || 'Error al obtener reporte por género';
  }
};