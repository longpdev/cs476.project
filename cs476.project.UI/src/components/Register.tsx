import { Box, Heading, Container, Center } from "@chakra-ui/react";
import logo from "./logo-image.png";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
  VStack,
  Button,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Register() {
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
        Sign up as a new member
      </Heading>
      <form>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="name">Full Name</FormLabel>
            <Input
              id="fullname"
              type="text"
              placeholder="Enter your legal name."
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" type="email" placeholder="Enter your email." />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="tel">Contact Number</FormLabel>
            <Input
              id="contactnumber"
              type="tel"
              placeholder="Enter your contact number."
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="postalcode">Postal Code</FormLabel>
            <Input
              id="postalcode"
              type="text"
              placeholder="Enter your postal code."
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password."
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Confirm Password</FormLabel>
            <Input
              id="repassword"
              type="password"
              placeholder="Re enter your password."
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>

          <Link to="/login">
            <Text align="right">Already a User?</Text>
          </Link>

          <Button mt={4} colorScheme="teal" type="submit" width="full">
            Register
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
