import { Box, Heading, Text, VStack, Image } from '@chakra-ui/react';

export const NotAnAdmin = () => {
  return (
    <Box>
      <Heading py="10" textAlign={'center'}>
        Permission Denied
      </Heading>

      <VStack alignContent={'center'} spacing="20">
        <Box h="100px">
          <Image
            width="200px"
            height="200px"
            src="src/assets/permission-denied.gif"
          />
        </Box>
        <Box h="40px">
          <Text fontSize="2xl" as="b">
            You are not authorised to view this page.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};
