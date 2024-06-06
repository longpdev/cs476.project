import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface FormValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  address: string;
  date: string;
}

const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const PetAdoptionForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    //currently console logging the data
    //next sprint integrate this with database
    console.log(data);
  };

  return (
    <>
      <Heading py="10" textAlign={"center"}>
        Provide the information for the adopter{" "}
      </Heading>
      <Box maxW="lg" mx="auto" mt={10} p={5} borderWidth={1} borderRadius="lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4}>
            <FormControl id="first-name" isRequired>
              <FormLabel>First Name</FormLabel>
              <Input placeholder="First Name" {...register("firstName")} />
            </FormControl>
            <FormControl id="last-name" isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Last Name" {...register("lastName")} />
            </FormControl>
            <FormControl id="phone-number" isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="tel"
                placeholder="Phone Number"
                {...register("phoneNumber")}
              />
            </FormControl>
            <FormControl id="address" isRequired>
              <FormLabel>Address</FormLabel>
              <Textarea placeholder="Address" {...register("address")} />
            </FormControl>

            <Alert pt="5" status="info">
              <AlertIcon />
              Choose the date when our representative will visit you to inspect
              your house.
            </Alert>
            <FormControl id="date" isRequired>
              <FormLabel>Date</FormLabel>
              <Input
                type="date"
                min={getTodayDate()}
                {...register("date", { required: true })}
              />
            </FormControl>
            <Button type="submit" colorScheme="teal" width="full">
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </>
  );
};

export default PetAdoptionForm;
