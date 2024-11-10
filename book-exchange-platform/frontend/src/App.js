// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookListing from './pages/BookListing';
import BookSearch from './pages/BookSearch';
import AddBook from './pages/AddBook';
import ExchangeRequest from './pages/ExchangeRequest';
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';
import Register from './pages/Register';  // Import Register page
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> {/* Add Register route */}
        
        <Route path="/" element={<Dashboard />} />
        <Route path="/listing" element={<BookListing />} />
        <Route path="/search" element={<BookSearch />} />
        <Route path="/exchange-requests" element={<ExchangeRequest />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/add-book" element={<AddBook />} /> 
      </Routes>
    </Router>
  );
}

export default App;
