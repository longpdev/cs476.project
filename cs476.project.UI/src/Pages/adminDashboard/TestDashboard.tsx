import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Stack, Link, TabList, Tab } from '@chakra-ui/react';
const createTabItem = (to: string, label: string, currentPath: string) => {
  const isActive = currentPath === to;
  return (
    <Tab>
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
    </Tab>
  );
};

const links = [
  { to: '/', label: 'Home' },
  { to: '/User', label: 'User' },
  { to: '/', label: 'Pet Listing' },
  { to: '/Application', label: 'Application' },
];

export const NavbarItems = () => {
  //const isMobile = useBreakpointValue({ base: true, lg: false });
  const location = useLocation();
  const currentPath = location.pathname;
  const tabItems = links;

  return (
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      as='nav'
      spacing={{ base: 2, lg: 3 }}
      alignItems={{ base: 'left', lg: 'center' }}
    >
      <TabList>
        {tabItems.map((link) =>
          createTabItem(link.to, link.label, currentPath)
        )}
      </TabList>
    </Stack>
  );
};
