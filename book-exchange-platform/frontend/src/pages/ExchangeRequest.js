// src/pages/ExchangeRequest.js
import React, { useState } from 'react';
import axios from 'axios';

const ExchangeRequest = ({ bookId }) => {
  const [terms, setTerms] = useState('');

  const handleRequest = async () => {
    try {
      await axios.post('/api/exchange/request', { requesterId: 'userId', bookId, terms });
      alert('Request sent');
    } catch (error) {
      console.error('Error sending request', error);
    }
  };

  return (
    <div>
      <textarea placeholder="Enter terms for exchange" value={terms} onChange={(e) => setTerms(e.target.value)} />
      <button onClick={handleRequest}>Send Request</button>
    </div>
  );
};

export default ExchangeRequest;
