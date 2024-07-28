import React, { ReactNode, ReactText, useState, useEffect } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  useBreakpointValue
} from '@chakra-ui/react';
import {
  VscAccount,
  VscGithubAlt,
  VscMail,
  VscHome,
  VscMenu,
} from 'react-icons/vsc';
import { IconType } from 'react-icons';
import User from './user/User';
import { Applications } from './applications/Applications';
import { useNavigate, useLocation } from 'react-router-dom';

interface LinkItemProps {
  name: string;
  icon: IconType;
  content: ReactNode;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: VscHome, content: <div>Home Content</div> },
  { name: 'User', icon: VscAccount, content: <User /> },
  {
    name: 'Pet Listing',
    icon: VscGithubAlt,
    content: <div>Pet Listing Content</div>,
  },
  { name: 'Application', icon: VscMail, content: <Applications /> },
];

export default function DashboardContainer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState<LinkItemProps | null>(LinkItems[0]);
  const navigate = useNavigate();
  const location = useLocation();

  const isDrawer = useBreakpointValue({ base: true, md: false });

  const handleItemClick = (item: LinkItemProps) => {
    setSelectedItem(item);
    navigate(`/dashboard/?tab=${item.name}`);
    if (isDrawer) {
      onClose();
    }
  };

  useEffect(() => {
    const tab = new URLSearchParams(location.search).get('tab');
    const item = LinkItems.find(link => link.name === tab);
    setSelectedItem(item || LinkItems[0]);
  }, [location.search]);

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      {isDrawer ? (
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} onItemClick={handleItemClick} />
          </DrawerContent>
        </Drawer>
      ) : (
        <SidebarContent
          onClose={() => onClose}
          onItemClick={handleItemClick}
          display={{ base: 'none', md: 'block' }}
        />
      )}
      <Box ml={{ base: 0, md: 60 }} p="4">
        {isDrawer && (
          <Flex mb={5} alignItems="center">
            <IconButton
              variant="outline"
              onClick={onOpen}
              aria-label="open menu"
              icon={<VscMenu />}
            />
          </Flex>
        )}
        {selectedItem && (
          <Box>
            <Text fontSize="xl" fontWeight="bold" mb="4">
              {selectedItem.name}
            </Text>
            {selectedItem.content}
          </Box>
        )}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
  onItemClick: (item: LinkItemProps) => void;
}

const SidebarContent = ({ onClose, onItemClick, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      // h="100vh"
      h="full"
      overflowY="auto"
      {...rest}
    >
      <Flex h="5" alignItems="center" mx="8" justifyContent="space-between">
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          onClick={() => onItemClick(link)}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  onClick: () => void;
}
const NavItem = ({ icon, children, onClick, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};
