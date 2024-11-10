// src/pages/Dashboard.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/dashboard.css'; // Make sure this path is correct

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Welcome to Your Dashboard</h2>

      <div className="dashboard-options">
        {/* Book Listing */}
        <div className="option">
          <h3>Book Listing</h3>
          <Link to="/listing">
            <button className="btn">View Books</button>
          </Link>
        </div>

        {/* Book Search */}
        <div className="option">
          <h3>Book Search</h3>
          <Link to="/search">
            <button className="btn">Search for Books</button>
          </Link>
        </div>

        {/* Book Add */}
        <div className="option">
          <h3>Book Add</h3>
          <Link to="/add-book">
            <button className="btn">Add Books</button>
          </Link>
        </div>

        {/* User Profile */}
        <div className="option">
          <h3>Your Profile</h3>
          <Link to="/profile">
            <button className="btn">View Profile</button>
          </Link>
        </div>

        {/* Exchange Requests */}
        <div className="option">
          <h3>Exchange Requests</h3>
          <Link to="/exchange-requests">
            <button className="btn">View Requests</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
