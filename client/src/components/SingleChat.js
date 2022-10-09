import { Box, IconButton, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { getSender, getSenderFull } from '../utils/chatLogic';
import { ChatContext } from '../context/chatContext';
import { ArrowBackIcon } from '@chakra-ui/icons';
import ProfileModal from './ProfileModal.js';
import UpdateGroupChatModal from './UpdateGroupChatModal';

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const { user, selectedChat, setSelectedChat, chat } = useContext(ChatContext);

  return (
    <>
      {selectedChat ? (
        <>
          <Text
            fontSize={{ base: '28px', md: '30px' }}
            pb={3}
            px={2}
            fontFamily='Work sans'
            w='100%'
            display={'flex'}
            justifyContent={{ base: 'space-between' }}
            alignItems='center'
          >
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              icon={<ArrowBackIcon />}
              onClick={() => setSelectedChat('')}
            />
            {!selectedChat.isGroupChat ? (
              <>
                {getSender(user, selectedChat.users)}
                <ProfileModal user={getSenderFull(user, selectedChat.users)} />
              </>
            ) : (
              <>
                {selectedChat.chatName?.toUpperCase()}

                <UpdateGroupChatModal
                  fetchAgain={fetchAgain}
                  setFetchAgain={setFetchAgain}
                />
              </>
            )}
          </Text>
          <Box
            display={'flex'}
            flexDir='column'
            justifyContent='flex-end'
            p={3}
            bg='#E8E8E8'
            w='100%'
            h='100%'
            borderRadius='1g'
            overflow='hidden'
          >
            {/* {Messages} */}
            <p>Messages here</p>
          </Box>
        </>
      ) : (
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          h='100%'
        >
          <Text fontSize={'3xl'} pb={3} fontFamily='Work sans'>
            Click on user to start chatting
          </Text>
        </Box>
      )}
    </>
  );
};

export default SingleChat;