import React, { useState, useContext } from 'react';
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
} from '@chakra-ui/react';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
import { ChevronDownIcon, BellIcon } from '@chakra-ui/icons';
import ProfileModal from './ProfileModal';

const SideDrawer = () => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [loading, setIsLoading] = useState(false);
  const [loadingChat, setIsLoadingChat] = useState('');

  const history = useHistory();

  const { user } = useContext(ChatContext);

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    history.push('/');
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
          <Button variant='ghost'>
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
    </>
  );
};

export default SideDrawer;
