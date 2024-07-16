import { Heading, Text, Image, VStack, Box } from '@chakra-ui/react';
import { PetAdoptionStepper } from '../../components/petAdoptionStepper';

export const RequestApproved = () => {
  return (
    <>
      <PetAdoptionStepper activeStep={3}></PetAdoptionStepper>
      <Heading py="10" textAlign={'center'}>
        Request Approved
      </Heading>

      <VStack alignContent={'center'} spacing="20">
        <Box h="100px">
          <Image
            width="200px"
            height="200px"
            src="src/assets/request-approved.gif"
          />
        </Box>
        <Box h="40px">
          <Text fontSize="2xl" as="b">
            Your Profile is Approve !!!
          </Text>
        </Box>
        <Box mx="300">
          <Text size="md">
            You are now eligible to proceed with the pet adoption process. We
            will contact you shortly with further details. Thank you for your
            commitment to providing a loving home
          </Text>
        </Box>
      </VStack>
    </>
  );
};
