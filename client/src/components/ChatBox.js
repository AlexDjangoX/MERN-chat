import { Box } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { ChatContext } from '../context/chatContext';
import SingleChat from './SingleChat';

const ChatBox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = useContext(ChatContext);

  return (
    <Box
      display={{ base: selectedChat ? 'flex' : 'none', md: 'flex' }}
      alignItems='center'
      flexDir='column'
      p={3}
      bg='white'
      w={{ base: '100%', md: '64%' }}
      borderRadius='1g'
      borderWidth='4px'
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default ChatBox;
