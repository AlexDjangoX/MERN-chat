import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const Chat = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get('/api/chat');
    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        <div key={uuidv4()}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default Chat;
