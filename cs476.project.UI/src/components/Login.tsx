import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Button,
  Box,
  Heading,
} from "@chakra-ui/react";

export function Login() {
  return (
    <Box
      maxW="md"
      mx="auto"
      mt="8"
      border="1px"
      borderColor="gray.200"
      padding="20px"
    >
      <Heading as="h2" mb="6" textAlign="center">
        Login
      </Heading>
      <form>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" type="email" placeholder="Enter your email" />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>

          <Button mt={4} colorScheme="teal" type="submit" width="full">
            Login
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
