import { Link as RouterLink } from "react-router-dom";
import {
  Stack,
  Image,
  useBreakpointValue,
  Spacer,
  Link,
} from "@chakra-ui/react";
import { ProfileMenu } from "./ProfileMenu";

export const NavbarItems = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <>
      <Stack
        direction={{ base: "column", lg: "row" }}
        as="nav"
        spacing={{ base: 2, lg: 3 }}
        alignItems={{ base: "left", lg: "center" }}
      >
        {!isMobile && (
          <Image
            src="src/assets/logo-image-circle.png"
            alt="Logo"
            style={{ height: "80px" }}
            borderRadius={"50%"}
          />
        )}
        <Link
          as={RouterLink}
          to="/"
          px={2}
          py={1}
          rounded="md"
          textDecoration="none"
          _hover={{ bg: "teal.800" }}
        >
          Home
        </Link>
        <Link
          as={RouterLink}
          to="/FindAPet"
          px={2}
          py={1}
          rounded="md"
          textDecoration="none"
          _hover={{ bg: "teal.800" }}
        >
          Find a Pet
        </Link>
        <Link
          as={RouterLink}
          to="/PetAdvice"
          px={2}
          py={1}
          rounded="md"
          textDecoration="none"
          _hover={{ bg: "teal.800" }}
        >
          Pet Advice
        </Link>
        <Link
          as={RouterLink}
          to="/MyAdoptions"
          px={2}
          py={1}
          rounded="md"
          textDecoration="none"
          _hover={{ bg: "teal.800" }}
        >
          My Adoptions
        </Link>
        <Link
          as={RouterLink}
          to="/AboutUs"
          px={2}
          py={1}
          rounded="md"
          textDecoration="none"
          _hover={{ bg: "teal.800" }}
        >
          About Us
        </Link>

        <Spacer />

        {!isMobile && <ProfileMenu />}
      </Stack>
    </>
  );
};
