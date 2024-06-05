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

import { PetAdoptionStepper } from "../components/petAdoptionStepper";

export const PetAdoptionStep1 = () => {
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <>
      <PetAdoptionStepper activeStep={0}></PetAdoptionStepper>
      <Box p={8} mx="8">
        <VStack as="form" spacing={4} onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>1. Who would you adopt it for?</FormLabel>
            <RadioGroup>
              <VStack align="start">
                <Radio value="self">Yourself</Radio>
                <Radio value="family">Your Family</Radio>
                <Radio value="friends">Your Friends</Radio>
              </VStack>
            </RadioGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>2. Are you a pet owner?</FormLabel>
            <RadioGroup>
              <VStack align="start">
                <Radio value="current">Current</Radio>
                <Radio value="past">Past</Radio>
                <Radio value="first-time">First Time</Radio>
              </VStack>
            </RadioGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>3. How many pets do you have at home?</FormLabel>
            <Select placeholder="Select option">
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
                <Radio value="apartment">Apartment</Radio>
                <Radio value="house">House</Radio>
                <Radio value="condo">Condo</Radio>
              </VStack>
            </RadioGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>5. My home has a yard?</FormLabel>
            <RadioGroup>
              <VStack align="start">
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </VStack>
            </RadioGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>6. Do you have a fenced yard?</FormLabel>
            <RadioGroup>
              <VStack align="start">
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </VStack>
            </RadioGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>7. My home has a nearby park?</FormLabel>
            <RadioGroup>
              <VStack align="start">
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </VStack>
            </RadioGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>
              8. Is there a pet restriction as per your lease or HOA?
            </FormLabel>
            <RadioGroup>
              <VStack align="start">
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </VStack>
            </RadioGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>9. Do you have kids in the house?</FormLabel>
            <RadioGroup>
              <VStack align="start">
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </VStack>
            </RadioGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>10. How many rooms do you have in your house?</FormLabel>
            <Select placeholder="Select option">
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
                <Radio value="me">Me</Radio>
                <Radio value="family">Family</Radio>
              </VStack>
            </RadioGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>
              12. Is anyone in your household allergic to animals?
            </FormLabel>
            <RadioGroup>
              <VStack align="start">
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </VStack>
            </RadioGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>
              13. How many hours a day will the pet be left alone?
            </FormLabel>
            <Select placeholder="Select option">
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
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </VStack>
            </RadioGroup>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>
              15. Why do you want to adopt a pet? (100-200 words)
            </FormLabel>
            <Textarea placeholder="Describe why you want to adopt a pet" />
          </FormControl>

          <FormControl isRequired mb="10">
            <FormLabel>
              16. Can you provide personal references who can vouch for your
              suitability as a pet owner?
            </FormLabel>
            <Textarea placeholder="Describe why you want to adopt a pet" />
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
