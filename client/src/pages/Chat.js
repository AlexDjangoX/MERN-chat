import React, { useEffect, useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SideDrawer from '../components/SideDrawer';
import MyChats from '../components/MyChats';
import ChatBox from '../components/ChatBox';
import { ChatContext } from '../context/chatContext';
import { Box } from '@chakra-ui/react';

const Chat = () => {
  const { user, setUser } = useContext(ChatContext);

  return (
    <div style={{ width: '100%' }}>
      {user && <SideDrawer />}
      <Box
        display='flex'
        justifyContent='space-between'
        w='100%'
        h='91.5vh'
        p='10px'
      >
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default Chat;
