import {
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Button,
} from '@chakra-ui/react';
import { SignOut } from './SignOut';

export const ProfileMenu = () => {
  return (
    <>
      <Menu>
        <MenuButton borderRadius={50} m={2} _hover={{ bg: 'teal.800' }}>
          <Avatar
            size="md"
            name="Christian Nwamba"
            src="https://bit.ly/code-beast"
          />
        </MenuButton>
        <MenuList>
          <MenuGroup title="Profile">
            <MenuItem>
              <SignOut />
            </MenuItem>
            <MenuItem as="a" href="/MyAccount">
              <Button>My Account</Button>
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </>
  );
};
