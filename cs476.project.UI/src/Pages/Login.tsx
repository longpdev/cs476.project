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
import { useForm } from "react-hook-form";
import { LoginData } from "../types/loginData";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { loginAPI, verifyToken } from "../apiServices";
import { useAppContext } from "../contexts/AppContext";

export function Login() {
  const { showToast, setIsAuthenticated } = useAppContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const navigate = useNavigate();

  const { mutate: verifyTokenMutation, error: verifyTokenError } = useMutation(
    verifyToken,
    {
      onSuccess: () => {
        showToast({ message: "Login successful", type: "success" }),
          setIsAuthenticated(true);
        navigate("/dashboard");
      },
      onError: (error: Error) =>
        showToast({ message: error.message, type: "error" }),
    }
  );

  console.log("verifyTokenError", verifyTokenError);

  const mutation = useMutation(loginAPI, {
    onSuccess: () => {
      showToast({ message: "Login successful", type: "success" }),
        navigate("/dashboard");
      verifyTokenMutation();
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
        Login
      </Heading>
      <form onSubmit={onSubmit} noValidate>
        <VStack spacing={4}>
          <FormControl isRequired isInvalid={!!errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required. 😉" })}
            />
            {errors.email && (
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.password}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required. 😉",
              })}
            />
            {errors.password && (
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            )}
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
