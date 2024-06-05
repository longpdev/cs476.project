import { Box, Heading, Container, Center } from "@chakra-ui/react";
import logo from "./logo-image.png";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { registerAPI } from "../registerAPI";
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
import { RegisterData } from "../types/registerData";

export function Register() {
  const { register, handleSubmit } = useForm<RegisterData>();

  const mutation = useMutation(registerAPI, {
    onSuccess: () => console.log("Success!"),
    onError: () => console.log("Error!"),
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

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
      <form onSubmit={onSubmit}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Please enter your email!" })}
            />
          </FormControl>{" "}
          <FormControl>
            <FormLabel htmlFor="name">First Name</FormLabel>
            <Input
              id="firstname"
              type="text"
              placeholder="Enter your first name"
              {...register("firstName", {
                required: "Please enter your first name!",
              })}
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="name">Last Name</FormLabel>
            <Input
              id="lastname"
              type="text"
              placeholder="Enter your last name"
              {...register("lastName", {
                required: "Please enter your last name!",
              })}
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="tel">Phone Number</FormLabel>
            <Input
              id="contactnumber"
              type="tel"
              placeholder="Enter your contact number"
              {...register("phoneNumber", {
                required: "Please enter your phone number!",
              })}
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="postalcode">Postal Code</FormLabel>
            <Input
              id="postalcode"
              type="text"
              placeholder="Enter your postal code"
              {...register("postalCode", {
                required: "Please enter your postal code!",
              })}
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              type="password"
              {...register("password", {
                required: "Enter!",
                minLength: { value: 8, message: "Need at least 8 characters" },
              })}
              placeholder="Enter your password"
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Confirm Password</FormLabel>
            <Input
              id="repassword"
              type="password"
              placeholder="Re enter your password"
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
