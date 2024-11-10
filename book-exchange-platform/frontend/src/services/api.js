import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const registerUser = (userData) => axios.post(`${API_URL}/auth/register`, userData);
export const loginUser = (userData) => axios.post(`${API_URL}/auth/login`, userData);
export const fetchBooks = () => axios.get(`${API_URL}/books`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
export const requestExchange = (bookId) => axios.post(`${API_URL}/exchanges`, { bookId }, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
export const fetchExchangeRequests = () => axios.get(`${API_URL}/exchanges`, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } });
