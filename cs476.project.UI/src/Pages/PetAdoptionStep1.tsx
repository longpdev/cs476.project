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
  Alert,
  AlertIcon,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { PetAdoptionStepper } from '../components/petAdoptionStepper';
import { useAppContext } from '../contexts/AppContext';
import { QuestionData } from '../types/questionData';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { questionAPI } from '../apiServices';

export const PetAdoptionStep = () => {
  const { showToast } = useAppContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuestionData>();
  const navigate = useNavigate();
  const mutation = useMutation(questionAPI, {
    onSuccess: () => {
      showToast({ message: 'Adoption request is submitted!', type: 'success' }),
        navigate('/RequestPending');
    },
    onError: (error: Error) =>
      showToast({ message: error.message, type: 'error' }),
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <>
      <PetAdoptionStepper activeStep={0}></PetAdoptionStepper>

      <Heading py="10" textAlign={'center'}>
        Tell Us About Yourself
      </Heading>

      <Box p={8} mx="8">
        <form onSubmit={onSubmit} noValidate>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Who would you adopt it for?</FormLabel>
              <RadioGroup>
                <VStack align="start">
                  <Radio value="self" {...register('adoptionFor')}>
                    Yourself
                  </Radio>
                  <Radio value="family" {...register('adoptionFor')}>
                    Your family
                  </Radio>
                  <Radio value="friends" {...register('adoptionFor')}>
                    Your friends
                  </Radio>
                </VStack>
              </RadioGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Are you a pet owner?</FormLabel>
              <RadioGroup>
                <VStack align="start">
                  <Radio value="current" {...register('petOwner')}>
                    Current
                  </Radio>
                  <Radio value="past" {...register('petOwner')}>
                    Past
                  </Radio>
                  <Radio value="first-time" {...register('petOwner')}>
                    First Time
                  </Radio>
                </VStack>
              </RadioGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Do you have any pets at home?</FormLabel>
              <Select placeholder="Select option" {...register('petsAtHome')}>
                <option value="none">None</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="both">Both</option>
              </Select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>What type of home do you live in?</FormLabel>
              <RadioGroup>
                <VStack align="start">
                  <Radio value="apartment" {...register('homeType')}>
                    Apartment
                  </Radio>
                  <Radio value="house" {...register('homeType')}>
                    House
                  </Radio>
                  <Radio value="condo" {...register('homeType')}>
                    Condo
                  </Radio>
                </VStack>
              </RadioGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Who will be responsible for the pet’s care?</FormLabel>
              <RadioGroup>
                <VStack align="start">
                  <Radio value="me" {...register('petCareResponsible')}>
                    Yourself
                  </Radio>
                  <Radio value="family" {...register('petCareResponsible')}>
                    Your family
                  </Radio>
                </VStack>
              </RadioGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>
                Are you prepared for the financial responsibilities of pet
                ownership?
              </FormLabel>
              <RadioGroup>
                <VStack align="start">
                  <Radio value="yes" {...register('financialPreparedness')}>
                    Yes
                  </Radio>
                  <Radio value="no" {...register('financialPreparedness')}>
                    No
                  </Radio>
                </VStack>
              </RadioGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Why do you want to adopt a pet?</FormLabel>
              <Textarea
                placeholder="Describe why you want to adopt a pet"
                {...register('adoptionReason')}
              />
            </FormControl>

            <Heading py="10" textAlign={'center'}>
              Provide The Information Of The Adopter{' '}
            </Heading>
            <Box
              maxW="lg"
              mx="auto"
              mt={10}
              p={5}
              borderWidth={1}
              borderRadius="lg"
            >
              <VStack spacing={4}>
                <FormControl isRequired isInvalid={!!errors.firstName}>
                  <FormLabel htmlFor="firstName">First Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter your first name"
                    {...register('firstName', {
                      required: 'First name is required. 😉',
                    })}
                  />
                  {errors.firstName && (
                    <FormErrorMessage>
                      {errors.firstName?.message}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isRequired isInvalid={!!errors.lastName}>
                  <FormLabel htmlFor="lastName">Last Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter your last name"
                    {...register('lastName', {
                      required: 'Last name is required. 😉',
                    })}
                  />
                  {errors.lastName && (
                    <FormErrorMessage>
                      {errors.lastName?.message}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isRequired isInvalid={!!errors.phoneNumber}>
                  <FormLabel htmlFor="tel">Phone Number</FormLabel>
                  <Input
                    type="tel"
                    placeholder="Enter your contact number"
                    {...register('phoneNumber', {
                      required: 'Phone number is required. 😉',
                    })}
                  />
                  {errors.phoneNumber && (
                    <FormErrorMessage>
                      {errors.phoneNumber?.message}
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isRequired isInvalid={!!errors.address}>
                  <FormLabel htmlFor="address">Address</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter your address"
                    {...register('address', {
                      required: 'Address is required. 😉',
                    })}
                  />
                  {errors.address && (
                    <FormErrorMessage>
                      {errors.address?.message}
                    </FormErrorMessage>
                  )}
                </FormControl>

                <Alert pt="5" status="info">
                  <AlertIcon />
                  Choose the date when our representative will visit you to
                  inspect your house.
                </Alert>
                <FormControl isRequired>
                  <FormLabel htmlFor="date">Date</FormLabel>
                  <Input
                    type="date"
                    min={getTodayDate()}
                    {...register('inspectionDate', { required: true })}
                  />
                </FormControl>
              </VStack>
            </Box>

            <Button
              type="submit"
              colorScheme="teal"
              size="lg"
              width={{ base: '100%', lg: '25%' }}
              formNoValidate
            >
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </>
  );
};
