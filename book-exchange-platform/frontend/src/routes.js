// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import BookList from './pages/BookList';
import AddBook from './pages/AddBook';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/books" element={<BookList />} />
                <Route path="/add-book" element={<AddBook />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
