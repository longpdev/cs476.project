import { Heading, Text, Image, VStack, Box } from '@chakra-ui/react';
import { PetAdoptionStepper } from '../../components/petAdoptionStepper';

export const RequestRejected = () => {
  return (
    <>
      <PetAdoptionStepper activeStep={3}></PetAdoptionStepper>
      <Heading py="10" textAlign={'center'}>
        Request Rejected
      </Heading>

      <VStack alignContent={'center'} spacing="20">
        <Box h="100px">
          <Image
            width="200px"
            height="200px"
            src="src/assets/request-rejected.gif"
          />
        </Box>
        <Box h="40px">
          <Text fontSize="2xl" as="b">
            Your Profile is Rejected{' '}
          </Text>
        </Box>
        <Box mx="300">
          <Text size="md">
            We regret to inform you that your profile has not been approved for
            pet adoption at this time. This decision is made to ensure the best
            interests of the pets. We encourage you to reapply in the future and
            thank you for your understanding
          </Text>
        </Box>
      </VStack>
    </>
  );
};
