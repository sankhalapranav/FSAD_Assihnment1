// src/pages/UserProfile.js
import React from 'react';

const UserProfile = ({ user }) => (
  <div>
    <h2>{user.name}'s Profile</h2>
    <p>Favorite Genre: {user.favoriteGenre}</p>
    <p>Owned Books: {user.ownedBooks.join(', ')}</p>
  </div>
);

export default UserProfile;
