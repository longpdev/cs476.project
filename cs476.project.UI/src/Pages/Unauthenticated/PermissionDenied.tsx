import { Box, Heading, Text, VStack, Image } from '@chakra-ui/react';

export const PermissionDenied = ({
  heading,
  text,
}: {
  heading: string;
  text: string;
}) => {
  return (
    <Box>
      <Heading py='10' textAlign={'center'}>
        {heading}
      </Heading>

      <VStack alignContent={'center'} spacing='20'>
        <Box h='100px'>
          <Image
            width='200px'
            height='200px'
            src='src/assets/permission-denied.gif'
          />
        </Box>
        <Box h='40px'>
          <Text fontSize='2xl' as='b'>
            {text}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};
