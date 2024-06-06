import React from "react";
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Select,
  Textarea,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PetAdoptionStepper } from "../components/petAdoptionStepper";

interface FormValues {
  adoptionFor: string;
  petOwner: string;
  petsAtHome: string;
  homeType: string;
  hasYard: string;
  fencedYard: string;
  nearbyPark: string;
  petRestriction: string;
  hasKids: string;
  roomCount: string;
  petCareResponsible: string;
  householdAllergy: string;
  petAloneTime: string;
  financialPreparedness: string;
  adoptionReason: string;
  personalReferences: string;
}

export const PetAdoptionStep1 = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    //currently console logging the data
    //next sprint integrate this with database
    console.log(data);
  };

  return (
    <>
      <PetAdoptionStepper activeStep={0}></PetAdoptionStepper>

      <Heading py="10" textAlign={"center"}>
        Tell Us About Yourself
      </Heading>

      <Box p={8} mx="8">
        <VStack as="form" spacing={4} onSubmit={handleSubmit(onSubmit)}>
          <FormControl isRequired>
            <FormLabel>1. Who would you adopt it for?</FormLabel>
            <RadioGroup>
              <VStack align="start">
                <Radio value="self" {...register("adoptionFor")}>
                  Yourself
                </Radio>
                <Radio value="family" {...register("adoptionFor")}>
                  Your Family
                </Radio>
                <Radio value="friends" {...register("adoptionFor")}>
                  Your Friends
                </Radio>
              </VStack>
            </RadioGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>2. Are you a pet owner?</FormLabel>
            <RadioGroup>
              <VStack align="start">
                <Radio value="current" {...register("petOwner")}>
                  Current
                </Radio>
                <Radio value="past" {...register("petOwner")}>
                  Past
                </Radio>
                <Radio value="first-time" {...register("petOwner")}>
                  First Time
                </Radio>
              </VStack>
            </RadioGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>3. How many pets do you have at home?</FormLabel>
            <Select placeholder="Select option" {...register("petsAtHome")}>
              <option value="none">None</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="both">Both</option>
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>4. What kind of home do you live in?</FormLabel>
            <RadioGroup>
              <VStack align="start">
                <Radio value="apartment" {...register("homeType")}>
                  Apartment
                </Radio>
                <Radio value="house" {...register("homeType")}>
                  House
                </Radio>
                <Radio value="condo" {...register("homeType")}>
                  Condo
                </Radio>
              </VStack>
            </RadioGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>5. My home has a yard?</FormLabel>
            <RadioGroup>
              <VStack align="start">
                <Radio value="yes" {...register("hasYard")}>
                  Yes
                </Radio>
                <Radio value="no" {...register("hasYard")}>
                  No
                </Radio>
              </VStack>
            </RadioGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>6. Do you have a fenced yard?</FormLabel>
            <RadioGroup>
              <VStack align="start">
                <Radio value="yes" {...register("fencedYard")}>
                  Yes
                </Radio>
                <Radio value="no" {...register("fencedYard")}>
                  No
                </Radio>
              </VStack>
            </RadioGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>7. My home has a nearby park?</FormLabel>
            <RadioGroup>
              <VStack align="start">
                <Radio value="yes" {...register("nearbyPark")}>
                  Yes
                </Radio>
                <Radio value="no" {...register("nearbyPark")}>
                  No
                </Radio>
              </VStack>
            </RadioGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>
              8. Is there a pet restriction as per your lease or HOA?
            </FormLabel>
            <RadioGroup>
              <VStack align="start">
                <Radio value="yes" {...register("petRestriction")}>
                  Yes
                </Radio>
                <Radio value="no" {...register("petRestriction")}>
                  No
                </Radio>
              </VStack>
            </RadioGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>9. Do you have kids in the house?</FormLabel>
            <RadioGroup>
              <VStack align="start">
                <Radio value="yes" {...register("hasKids")}>
                  Yes
                </Radio>
                <Radio value="no" {...register("hasKids")}>
                  No
                </Radio>
              </VStack>
            </RadioGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>10. How many rooms do you have in your house?</FormLabel>
            <Select placeholder="Select option" {...register("roomCount")}>
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="more">More than two</option>
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>
              11. Who will be responsible for the pet’s care?
            </FormLabel>
            <RadioGroup>
              <VStack align="start">
                <Radio value="me" {...register("petCareResponsible")}>
                  Me
                </Radio>
                <Radio value="family" {...register("petCareResponsible")}>
                  Family
                </Radio>
              </VStack>
            </RadioGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>
              12. Is anyone in your household allergic to animals?
            </FormLabel>
            <RadioGroup>
              <VStack align="start">
                <Radio value="yes" {...register("householdAllergy")}>
                  Yes
                </Radio>
                <Radio value="no" {...register("householdAllergy")}>
                  No
                </Radio>
              </VStack>
            </RadioGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>
              13. How many hours a day will the pet be left alone?
            </FormLabel>
            <Select placeholder="Select option" {...register("petAloneTime")}>
              <option value="0-4">0-4</option>
              <option value="4-8">4-8</option>
              <option value="8-12">8-12</option>
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>
              14. Are you prepared for the financial responsibilities of pet
              ownership?
            </FormLabel>
            <RadioGroup>
              <VStack align="start">
                <Radio value="yes" {...register("financialPreparedness")}>
                  Yes
                </Radio>
                <Radio value="no" {...register("financialPreparedness")}>
                  No
                </Radio>
              </VStack>
            </RadioGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>
              15. Why do you want to adopt a pet? (100-200 words)
            </FormLabel>
            <Textarea
              placeholder="Describe why you want to adopt a pet"
              {...register("adoptionReason")}
            />
          </FormControl>

          <FormControl isRequired mb="10">
            <FormLabel>
              16. Can you provide personal references who can vouch for your
              suitability as a pet owner?
            </FormLabel>
            <Textarea
              placeholder="Describe why you want to adopt a pet"
              {...register("personalReferences")}
            />
          </FormControl>

          <Button
            type="submit"
            colorScheme="teal"
            size="lg"
            width={{ base: "100%", lg: "25%" }}
          >
            Submit
          </Button>
        </VStack>
      </Box>
    </>
  );
};
