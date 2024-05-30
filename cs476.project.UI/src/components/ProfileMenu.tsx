import { Avatar, Menu, MenuButton, MenuList, MenuItem, MenuGroup } from '@chakra-ui/react';


export const ProfileMenu = () => {
    return (
        <>
            <Menu>
                <MenuButton borderRadius={50} m={2} _hover={{ bg: 'teal.800' }}>
                    <Avatar size='md' name='Christian Nwamba' src='https://bit.ly/code-beast' />
                </MenuButton>
                <MenuList>
                    <MenuGroup title="Profile">
                        <MenuItem>Sign Out</MenuItem>
                        <MenuItem as='a' href='/MyAccount'>My Account</MenuItem>
                        <MenuItem as='a' href='/FAQs'>FAQ'S</MenuItem>
                    </MenuGroup>
                </MenuList>
            </Menu>
        </>
    )
};



