import { Flex, Text, Box, Icon } from '@chakra-ui/react';
import { VscGithubAlt } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Box textAlign='center' bg='#FF9F66' color='white' p='4'>
      <Box pb='4'>
        <Text as='b'>© {new Date().getFullYear()} Pet Adoption Website</Text>
      </Box>

      <Flex justifyContent='center' alignItems='center'>
        <Link to='https://github.com/longpdev/cs476.project'>
          <Text as='b' mr='2'>
            UofR - CS476 Project - Available on Github
          </Text>
          <Icon as={VscGithubAlt} w='5' h='5' />
        </Link>
      </Flex>
    </Box>
  );
}
