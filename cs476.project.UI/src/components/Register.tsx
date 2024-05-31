import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import { RegisterData } from "../types/registerData";
import { useMutation } from "react-query";
import { Heading } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { registerAPI } from "../registerAPI";

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
    <form onSubmit={onSubmit}>
      <Heading>Sign Up here</Heading>

      <FormControl marginTop={10}>
        <FormLabel>Email address</FormLabel>
        <Input type="email" {...register("email", { required: "Enter!" })} />
      </FormControl>

      <FormControl marginTop={10}>
        <FormLabel>First Name</FormLabel>
        <Input type="text" />
      </FormControl>

      <FormControl marginTop={10}>
        <FormLabel>Last Name</FormLabel>
        <Input type="text" />
      </FormControl>

      <FormControl marginTop={10}>
        <FormLabel>Contact Number</FormLabel>
        <Input type="tel" />
      </FormControl>

      <FormControl marginTop={10}>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          {...register("password", {
            required: "Enter!",
            minLength: { value: 8, message: "Need at least 8 characters" },
          })}
        />
      </FormControl>

      <Button
        type="submit"
        colorScheme="blue"
        size="lg"
        marginTop={10}
        padding={5}
      ></Button>
    </form>
  );
}
