import React from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';

const ProfileModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
          display={{ base: 'flex' }}
          icon={<ViewIcon />}
          onClick={onOpen}
        />
      )}

      <Modal isCentered size='lg' isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontSize='40px'
            fontFamily='Work sans'
            display='flex'
            justifyContent='center'
          >
            {user.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display='flex'
            flexDir='column'
            alignItems='center'
            justifyContent='space-between'
            bg='#90CDF4'
          >
            <Image
              borderRadius='full'
              boxSize='150px'
              src={user.pic}
              alt={user.name}
            />
            <Text
              fontSize={{ base: '28px', md: '30px' }}
              fontFamily='Work sans'
            >
              {user.email}
            </Text>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
