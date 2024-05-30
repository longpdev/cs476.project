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

export function Login() {
  return (
    <Container alignContent="Center">
        Login
            <FormControl marginTop={10}>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
            <FormHelperText>We'll never share your email.</FormHelperText>
         </FormControl>

         <FormControl marginTop={10}>
            <FormLabel>Password</FormLabel>
            <Input type='password' />
            </FormControl>

            <Button colorScheme='blue' size='lg' marginTop={10}  padding={5}>Login</Button>
  </Container>
  );
}