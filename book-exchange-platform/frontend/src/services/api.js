// src/services/api.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
};

export const loginUser = async (userData) => {
    const response = await axios.post(`${API_URL}/users/login`, userData);
    return response.data;
};

export const fetchBooks = async () => {
    const response = await axios.get(`${API_URL}/books`);
    return response.data;
};

export const addBook = async (bookData, token) => {
    const response = await axios.post(`${API_URL}/books`, bookData, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};
