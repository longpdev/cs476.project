import { Flex, Box, Heading, Text } from '@chakra-ui/react';

export function ForgotPassword() {
  return (
    <Flex direction='column' align='center' justify='center' height='70vh'>
      <Box
        p={8}
        my={12}
        borderWidth={2}
        borderRadius='lg'
        overflow='hidden'
        boxShadow='xl'
        borderColor='teal.500'
      >
        <Heading as='h1' size='xl' mb={6} color='teal.500'>
          Need to reset password?
        </Heading>

        <Text fontSize='lg' color='teal.900'>
          Feature will be available soon! For now, please contact admin for
          assistance!
        </Text>
      </Box>
    </Flex>
  );
}
