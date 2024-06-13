import { Link as RouterLink } from "react-router-dom";
import {
  Stack,
  Image,
  useBreakpointValue,
  Spacer,
  Link,
} from "@chakra-ui/react";
import { ProfileMenu } from "./ProfileMenu";
import { useAppContext } from "../contexts/AppContext";

const createLinkItem = (to: string, label: string) => {
  return (
    <Link
      as={RouterLink}
      to={to}
      px={2}
      py={1}
      rounded="md"
      textDecoration="none"
      _hover={{ bg: "teal.800" }}
      textColor={"white"}
    >
      {label}
    </Link>
  );
};

const links = [
  { to: "/", label: "Home" },
  { to: "/FindAPet", label: "Find a Pet" },
  { to: "/PetAdvice", label: "Pet Advice" },
  { to: "/MyAdoptions", label: "My Adoptions" },
  { to: "/AboutUs", label: "About Us" },
];

export const NavbarItems = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const { isAuthenticated } = useAppContext();

  return (
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
      {links.map((link) => createLinkItem(link.to, link.label))}
      <Spacer />

      {!isMobile && isAuthenticated && <ProfileMenu />}
    </Stack>
  );
};
