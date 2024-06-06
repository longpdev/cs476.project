import { Heading, Text, Image, VStack, Box } from "@chakra-ui/react";
import { PetAdoptionStepper } from "../components/petAdoptionStepper";

export const RequestPending = () => {
  return (
    <>
      <PetAdoptionStepper activeStep={2}></PetAdoptionStepper>
      <Heading py="10" textAlign={"center"}>
        Request Pending
      </Heading>

      <VStack alignContent={"center"} spacing="20">
        <Box h="100px">
          <Image
            width="200px"
            height="200px"
            src="src/assets/pending-request.gif"
          />
        </Box>
        <Box h="40px">
          <Text fontSize="2xl" as="b">
            Your Profile is under review
          </Text>
        </Box>
        <Box mx="300">
          <Text size="md">
            Thank you for submitting your information. We are currently
            evaluating your profile to ensure a proper and responsible pet
            adoption process. We appreciate your patience and will get back to
            you soon
          </Text>
        </Box>
      </VStack>
    </>
  );
};
