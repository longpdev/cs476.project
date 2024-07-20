import React, { useState, useEffect } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Box,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faA,
  faB,
  faC,
  faD,
  faE,
  faF,
  faG,
  faH,
  faI,
  faJ,
  faK,
  faL,
  faM,
  faN,
  faO,
  faP,
  faQ,
  faR,
  faS,
  faT,
  faU,
  faV,
  faW,
  faX,
  faY,
  faZ,
} from '@fortawesome/free-solid-svg-icons';
import { useQuery } from 'react-query';
import { getAllUser } from '../apiServices';
import { useAppContext } from '../contexts/AppContext';
import { SignOut } from './SignOut';

const iconMap: { [key: string]: IconDefinition } = {
  A: faA,
  B: faB,
  C: faC,
  D: faD,
  E: faE,
  F: faF,
  G: faG,
  H: faH,
  I: faI,
  J: faJ,
  K: faK,
  L: faL,
  M: faM,
  N: faN,
  O: faO,
  P: faP,
  Q: faQ,
  R: faR,
  S: faS,
  T: faT,
  U: faU,
  V: faV,
  W: faW,
  X: faX,
  Y: faY,
  Z: faZ,
};

interface UserType {
  _id: string;
  firstName: string;
}

export const ProfileMenu: React.FC = () => {
  const { userId } = useAppContext();
  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: getAllUser,
    refetchOnWindowFocus: false,
  });

  const [initial, setInitial] = useState<string>('A');

  useEffect(() => {
    if (users) {
      const currentUser = users.find((user: UserType) => user._id === userId);
      if (currentUser && currentUser.firstName) {
        setInitial(currentUser.firstName.charAt(0).toUpperCase());
      }
    }
  }, [users, userId]);

  return (
    <Menu>
      <MenuButton borderRadius={50} m={2}>
        <Box
          backgroundColor="teal.800"
          borderRadius="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="50px"
          height="50px"
        >
          <FontAwesomeIcon color="white" icon={iconMap[initial]} size="xl" />
        </Box>
      </MenuButton>
      <MenuList>
        <MenuGroup title="Profile">
          <MenuItem as="a" href="/MyAccount">
            My Account
          </MenuItem>
          <MenuItem>
            <SignOut />
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
