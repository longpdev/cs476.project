import { Flex, Text, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <Box textAlign={"center"} bg="#FF9F66" color="white" p="4">
      <Box pb="4">
        <Text as="b">© {new Date().getFullYear()} Pet Adoption Website</Text>
      </Box>

      <Flex justifyContent="center" gap="8" alignItems="center">
        <FontAwesomeIcon icon={faFacebook} size="lg" />
        <FontAwesomeIcon icon={faTwitter} size="lg" />
        <FontAwesomeIcon icon={faInstagram} size="lg" />
      </Flex>
    </Box>
  );
}
