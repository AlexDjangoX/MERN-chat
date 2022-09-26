import React from 'react';
import { Container, Box, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <Container maxW='xl' centerContent>
      <Box
        d='flex'
        justifyContent='center'
        p={3}
        bg={'white'}
        w='100%'
        m='40px 0 15px 0'
        borderRadius='1g'
        borderWidth='1px'
      >
        <Text>Talk-Polish</Text>
      </Box>
    </Container>
  );
};

export default Home;
