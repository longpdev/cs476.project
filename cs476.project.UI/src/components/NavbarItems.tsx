import { Link, Stack, Image, useBreakpointValue, Spacer } from '@chakra-ui/react';
import { ProfileMenu } from './ProfileMenu';

export const NavbarItems = () => {

    const isMobile = useBreakpointValue({ base: true, lg: false });

    return (
        <>
            <Stack direction={{ base: 'column', lg: 'row' }} as="nav" spacing={{ base: 2, lg: 3 }} alignItems={{ base: 'left', lg: 'center' }}>
                {!isMobile && (<Image src="src\assets\logo-image-circle.png" alt="Logo" style={{ height: '80px' }} borderRadius={"50%"} />)}
                <Link
                    px={2}
                    py={1}
                    size={'10px'}
                    rounded="md"
                    textDecoration="none"
                    _hover={{ bg: 'teal.800' }}
                    href="/"
                >
                    Home
                </Link>
                <Link px={2} py={1} rounded="md" _hover={{ bg: 'teal.800' }} href="/FindAPet" textDecoration="none">
                    Find a Pet

                </Link>
                <Link px={2} py={1} rounded="md" textDecoration="none" _hover={{ bg: 'teal.800' }} href="/PetAdvice">
                    Pet Advice
                </Link>
                <Link
                    px={2}
                    py={1}
                    size={'1px'}
                    rounded="md"
                    textDecoration="none"
                    _hover={{ bg: 'teal.800' }}
                    href="/MyAdoptions"
                >
                    My Adoptions
                </Link>
                <Link px={2} py={1} rounded="md" textDecoration="none" _hover={{ bg: 'teal.800' }} href="/AboutUs">
                    About Us
                </Link>

                <Spacer />

                {!isMobile && (<ProfileMenu />)}
            </Stack>
        </>
    )
};
