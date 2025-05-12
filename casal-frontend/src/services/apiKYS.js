import axios from 'axios';

const apiKYS = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiKYS.interceptors.request.use(
  (config) => {
    const tokenKYS = localStorage.getItem(process.env.REACT_APP_TOKEN_NAME);
    if (tokenKYS) {
      config.headers.Authorization = `Bearer ${tokenKYS}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const loginKYS = async (credentials) => {
  try {
    const response = await apiKYS.post('/login', credentials);
    return {
      token: response.data.token,
      user: { email: credentials.email, id: response.data.id }
    };
  } catch (error) {
    throw error.response?.data?.message || 'Error al iniciar sesión';
  }
};

export const getProfileKYS = async () => {
  try {
    const response = await apiKYS.get('/dashboard');
    return {
      user: {
        id: response.data.user.id,
        email: response.data.user.email,
      }
    };
  } catch (error) {
    throw error.response?.data?.message || 'Error al obtener perfil';
  }
};

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
    const response = await apiKYS.put(`/petsKYS/${id}`, petData);
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



export default apiKYS;