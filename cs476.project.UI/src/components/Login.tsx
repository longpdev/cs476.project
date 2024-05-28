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
            <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
            <FormHelperText>We'll never share your email.</FormHelperText>
         </FormControl>

         <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type='password' />
            </FormControl>

            <Button colorScheme='blue' size='lg'>Login</Button>
  </Container>
  );
}
