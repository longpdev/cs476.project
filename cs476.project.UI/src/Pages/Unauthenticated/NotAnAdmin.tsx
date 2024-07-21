import { Box, Heading, Text } from '@chakra-ui/react';

export const NotAnAdmin = () => {
  return (
    <Box>
      <Heading>Permission Required!</Heading>
      <Text>duh, you need admin permission</Text>
    </Box>
  );
};
