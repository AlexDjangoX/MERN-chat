import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import { ChatContext } from '../context/chatContext';
import {
  Box,
  Button,
  Text,
  Tooltip,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  MenuDivider,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  useToast,
} from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/spinner';
import { useDisclosure } from '@chakra-ui/hooks';
import { Avatar } from '@chakra-ui/react';
import { ChevronDownIcon, BellIcon } from '@chakra-ui/icons';
import ProfileModal from './ProfileModal';
import ChatLoading from './ChatLoading';
import UserListItem from './UserListItem';
import axios from 'axios';

const SideDrawer = () => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [loadingChat, setIsLoadingChat] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const history = useHistory();

  const { user, chats, setChats, setSelectedChat } = useContext(ChatContext);

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    history.push('/');
  };

  const toast = useToast();

  const handleSearch = async () => {
    if (!search) {
      toast({
        title: 'Enter search',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: 'top-left',
      });
    }

    try {
      let data;
      setIsLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      if (search) {
        data = await axios.get(`/api/user?search=${search}`, config);
        setSearchResult(data.data);
        setIsLoading(false);
      }
    } catch (error) {
      toast({
        title: 'Error',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom-left',
      });
    }
  };

  const accessChat = async (userId) => {
    try {
      setIsLoadingChat(true);

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.post('/api/chat', { userId }, config);

      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);

      setSelectedChat(data);
      setIsLoadingChat(false);
      onClose();
    } catch (error) {
      toast({
        title: 'Error fetching chat',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'bottom-left',
      });
    }
  };

  return (
    <>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        bg='white'
        p='5px 10px 5px 10px'
        borderWidth='5px'
      >
        <Tooltip label='Search users' hasArrow placement='bottom-end'>
          <Button variant='ghost' onClick={onOpen}>
            <i className='fas fa-search'></i>
            <Text display={{ base: 'none', md: 'flex' }} px='4'>
              Search User
            </Text>
          </Button>
        </Tooltip>
        <Text fontSize='2xl' fontFamily='Work sans'>
          Let's Chat
        </Text>
        <div>
          <Menu px={5} gap={2}>
            <MenuButton
              m='0px 28px 0px 0px'
              p={1}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              <BellIcon />
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuDivider />
              <MenuItem>Create a Copy</MenuItem>
              <MenuDivider />
              <MenuItem>Mark as Draft</MenuItem>
              <MenuDivider />
              <MenuItem>Delete</MenuItem>
              <MenuDivider />
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              m='0px 28px 0px 0px'
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              <Avatar
                size='sm'
                cursor='pointer'
                name={user.name}
                src={user.pic}
              />
            </MenuButton>

            <MenuList user={user}>
              <ProfileModal user={user}>
                <MenuItem>My Profile</MenuItem>
              </ProfileModal>
              <MenuDivider />
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Add users to chat</DrawerHeader>

          <DrawerBody>
            <Box display={'flex'} pb={2}>
              <Input
                placeholder='Search by name or email'
                mr={2}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              ></Input>
              <Button onClick={handleSearch}>Go</Button>
            </Box>
            {loading ? (
              <ChatLoading />
            ) : (
              searchResult?.map((user) => {
                return (
                  <UserListItem
                    key={uuidv4()}
                    user={user}
                    handleFunction={() => accessChat(user._id)}
                  />
                );
              })
            )}
            {loadingChat && <Spinner ml='auto' d='flex' />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
