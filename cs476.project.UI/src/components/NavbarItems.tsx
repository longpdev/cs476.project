import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Stack,
  Image,
  useBreakpointValue,
  Spacer,
  Link,
} from '@chakra-ui/react';
import { ProfileMenu } from './ProfileMenu';
import { useAppContext } from '../contexts/AppContext';
import Logo from '../assets/logo-image-circle.png';

const createLinkItem = (to: string, label: string, currentPath: string) => {
  const isActive = currentPath === to;
  return (
    <Link
      as={RouterLink}
      to={to}
      px={2}
      py={1}
      rounded='md'
      textDecoration='none'
      _hover={{ bg: 'teal.800' }}
      textColor={'white'}
      bg={isActive ? 'teal.900' : 'transparent'}
      key={label}
    >
      {label}
    </Link>
  );
};

const links = [
  { to: '/', label: 'Home' },
  { to: '/FindAPet', label: 'Find a Pet' },
  { to: '/FAQs', label: 'FAQs' },
  { to: '/AboutUs', label: 'About Us' },
];

const adminLinks = [
  { to: '/', label: 'Home' },
  { to: '/FindAPet', label: 'Pet Listing' },
  { to: '/FAQs', label: 'FAQs' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/AboutUs', label: 'About Us' },
];

const userLinks = [
  { to: '/', label: 'Home' },
  { to: '/FindAPet', label: 'Find a Pet' },
  { to: '/FAQs', label: 'FAQs' },
  { to: '/MyAdoptions', label: 'My Adoptions' },
  { to: '/AboutUs', label: 'About Us' },
];

export const NavbarItems = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const { isAuthenticated, isAdmin } = useAppContext();
  const location = useLocation();
  const currentPath = location.pathname;
  let menuItems;
  if (isAuthenticated && isAdmin) menuItems = adminLinks;
  else if (isAuthenticated && !isAdmin) menuItems = userLinks;
  else menuItems = links;

  return (
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      as='nav'
      spacing={{ base: 2, lg: 3 }}
      alignItems={{ base: 'left', lg: 'center' }}
    >
      <Link as={RouterLink} to='/'>
        {!isMobile && (
          <Image
            src={Logo}
            alt='Logo'
            style={{ height: '80px' }}
            borderRadius={'50%'}
          />
        )}
      </Link>
      {menuItems.map((link) =>
        createLinkItem(link.to, link.label, currentPath)
      )}
      <Spacer />

      {!isAuthenticated && (
        <Stack ml='auto'>
          {createLinkItem('/Login', 'Login', currentPath)}
        </Stack>
      )}

      {!isMobile && isAuthenticated && <ProfileMenu />}
    </Stack>
  );
};
