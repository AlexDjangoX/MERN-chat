import React, { useEffect } from 'react';
import { Avatar } from '@chakra-ui/react';
import { Box, Text } from '@chakra-ui/react';

const UserListItem = ({ user, handleFunction }) => {
  return (
    <Box
      onClick={handleFunction}
      cursor='pointer'
      bg='#F8E8D8'
      w='100%'
      display='flex'
      alignItems='center'
      color='black'
      px={3}
      py={2}
      mb={2}
      borderRadius='1g'
      _hover={{
        background: 'black',
        color: 'teal.500',
      }}
    >
      <Avatar
        mr={2}
        size='sm'
        cursor={'pointer'}
        name={user.name}
        src={user.pic}
      />
      <Box>
        <Text fontSize={'xs'}>{user.name}</Text>
        <Text>
          <b>Email : </b>
          {user.email}
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
