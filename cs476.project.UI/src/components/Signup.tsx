import { Box, Heading, Container, Center } from "@chakra-ui/react";
//import logo from "./logo-image.png";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button
} from "@chakra-ui/react";

export function Signup() {
  return (
    <Container alignContent="Center">
        Sign Up here
            <FormControl marginTop={10}>
            <FormLabel>Full Name</FormLabel>
            <Input type='text' />

         </FormControl>

         <FormControl marginTop={10}>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
            <FormHelperText>We'll never share your email.</FormHelperText>
         </FormControl>

         <FormControl marginTop={10}>
            <FormLabel>Contact Number</FormLabel>
            <Input type='tel' />
         </FormControl>

         <FormControl marginTop={10}>
            <FormLabel>Password</FormLabel>
            <Input type='password' />
            </FormControl>

         <Button colorScheme='blue' size='lg' marginTop={10}  padding={5}>Sign Up</Button>

  </Container>
  );
}