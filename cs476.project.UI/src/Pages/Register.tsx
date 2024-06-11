import logo from "./logo-image.png";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { registerAPI } from "../registerAPI";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Button,
  Text,
  Box,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RegisterData } from "../types/registerData";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

export function Register() {
  const { showToast } = useAppContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<RegisterData>();
  const navigate = useNavigate();
  const mutation = useMutation(registerAPI, {
    onSuccess: () => {
      showToast({ message: "Registration successful!", type: "success" }),
        navigate("/");
    },
    onError: (error: Error) =>
      showToast({ message: error.message, type: "error" }),
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
      <form onSubmit={onSubmit} noValidate>
        <VStack spacing={4}>
          <FormControl isRequired isInvalid={!!errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required. 😉" })}
            />
            {errors.email && (
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.firstName}>
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter your first name"
              {...register("firstName", {
                required: "First name is required. 😉",
              })}
            />
            {errors.firstName && (
              <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.lastName}>
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter your last name"
              {...register("lastName", {
                required: "Last name is required. 😉",
              })}
            />
            {errors.lastName && (
              <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.phoneNumber}>
            <FormLabel htmlFor="tel">Phone Number</FormLabel>
            <Input
              type="tel"
              placeholder="Enter your contact number"
              {...register("phoneNumber", {
                required: "Phone number is required. 😉",
              })}
            />
            {errors.phoneNumber && (
              <FormErrorMessage>{errors.phoneNumber?.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.postalCode}>
            <FormLabel htmlFor="postalcode">Postal Code</FormLabel>
            <Input
              type="text"
              placeholder="Enter your postal code"
              {...register("postalCode", {
                required: "Postal code is required. 😉",
              })}
            />
            {errors.postalCode && (
              <FormErrorMessage>{errors.postalCode?.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.password}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              type="password"
              {...register("password", {
                required: "Password is required. 😉 ",
                minLength: { value: 6, message: "Need at least 6 characters" },
              })}
              placeholder="Enter your password"
            />
            {errors.password && (
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.repassword}>
            <FormLabel htmlFor="password">Confirm Password</FormLabel>
            <Input
              type="password"
              placeholder="Confirm your password"
              {...register("repassword", {
                required: "Passwords need to be matched. 😉 ",
                validate: (value) =>
                  value === getValues("password") ||
                  "Passwords need to be matched. 😉",
              })}
            />
            {errors.repassword && (
              <FormErrorMessage>{errors.repassword?.message}</FormErrorMessage>
            )}
          </FormControl>
          // TODO: Style this Link
          <Link to="/login">
            <Text align="right">Already a User?</Text>
          </Link>
          <Button
            mt={4}
            colorScheme="teal"
            type="submit"
            width="full"
            formNoValidate
          >
            Register
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
