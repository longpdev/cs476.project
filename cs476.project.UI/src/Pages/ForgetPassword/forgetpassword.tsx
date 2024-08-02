import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

export function ForgetPassword() {
  return (
    <Flex direction='column' align='center' justify='center' height='70vh'>
      <Box bg='teal.500' border='2px' w='100%' maxW='sm' p={4} color='white'>
        Currently not in use. Please contact Pet Adoption Team.
      </Box>
    </Flex>
  );
}
