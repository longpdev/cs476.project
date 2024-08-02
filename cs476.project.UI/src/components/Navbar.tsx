import {
  Box,
  Flex,
  Spacer,
  useBreakpointValue,
  IconButton,
} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import { UseDisclosure } from './useDisclosure';

import { ProfileMenu } from './ProfileMenu';

import { NavbarItems } from './NavbarItems';
import { useAppContext } from '../contexts/AppContext';

export const Navbar = () => {
  const { isOpen, onToggle } = UseDisclosure();
  const { isAuthenticated } = useAppContext();
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <>
      {isMobile ? (
        <Box bg='teal.700' p={2}>
          <Flex>
            <IconButton
              m={2}
              px={6}
              size='lg'
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label='Open Menu'
              onClick={onToggle}
            />
            <Spacer />
            {isAuthenticated && <ProfileMenu />}
          </Flex>

          <Box bg='teal.700'>
            {isOpen && (
              <Box pb={4}>
                <NavbarItems />
              </Box>
            )}
          </Box>
        </Box>
      ) : (
        <Box bg='teal.700' p={2}>
          <NavbarItems />
        </Box>
      )}
    </>
  );
};
