// src/pages/Messaging.js
import React, { useState } from 'react';
import axios from 'axios';

const Messaging = () => {
  const [message, setMessage] = useState('');

  const handleSend = async () => {
    await axios.post('/api/messages/send', { senderId: 'user1', receiverId: 'user2', message });
    setMessage('');
  };

  return (
    <div>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default Messaging;
