import { CloseIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import React from 'react';

const UserBadgeItem = ({ user, handleFunction }) => {
  return (
    <Box
      display='flex'
      alignItems={'center'}
      px={2}
      py={1}
      borderRadius='6px'
      m={1}
      mb={2}
      fontSize={12}
      backgroundColor='purple'
      color='whitesmoke'
      cursor={'pointer'}
      variant='solid'
      onClick={handleFunction}
    >
      {user.name}
      <CloseIcon pl={1} />
    </Box>
  );
};

export default UserBadgeItem;
