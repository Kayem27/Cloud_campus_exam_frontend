import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Permet d'envoyer/recevoir les cookies HTTPOnly
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const fetchProducts = () => api.get('/products');

export const createOrder = (orderData) => {
    return api.post('/orders', orderData);
};

export const loginUser = (credentials) => api.post('/auth/login', credentials);

export const registerUser = (formData) => api.post('/auth/register', formData);

export const logoutUser = () => api.post('/auth/logout');

export const getMe = () => api.get('/auth/me');

export default api;
