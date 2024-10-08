import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Textarea,
  Button,
  Heading,
  Alert,
  AlertIcon,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { PetAdoptionStepper } from '../../components/petAdoptionStepper';
import { useAppContext } from '../../contexts/AppContext';
import { ApplicationData } from '../../types/applicationData';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation } from 'react-query';
import { applicationAPI, updatePetStatusById } from '../../apiServices';
import './PetAdoptionStep1.css';

export const PetAdoptionStep = () => {
  const { showToast, userId } = useAppContext();
  const { id: petId } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplicationData>();
  const navigate = useNavigate();
  const appicationMutation = useMutation(applicationAPI, {
    onSuccess: () => {
      showToast({ message: 'Adoption request is submitted!', type: 'success' }),
        navigate('/RequestPending');
    },
    onError: (error: Error) =>
      showToast({ message: error.message, type: 'error' }),
  });

  const petMutation = useMutation(
    (data: { id: string; status: string }) => updatePetStatusById(data),
    {
      onSuccess: () => {
        showToast({
          message: `Pet status updated successfully!`,
          type: 'success',
        });
      },
    }
  );

  const onSubmit = handleSubmit((data) => {
    const formData = { ...data, userId: userId || '', petId: petId || '' };
    appicationMutation.mutate(formData);
    petMutation.mutate({ id: petId || '', status: 'pending' });
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

      <Heading className='heading'>Tell Us About Yourself</Heading>

      <Box p={8} mx='8' bg='white' boxShadow='lg' borderRadius='md'>
        <form onSubmit={onSubmit} noValidate>
          <VStack spacing={4}>
            <FormControl isRequired className='form-control'>
              <FormLabel className='form-label'>
                Who would you adopt it for?
              </FormLabel>
              <RadioGroup>
                <VStack align='start' className='radio-group'>
                  <Radio
                    className='radio'
                    value='self'
                    {...register('adoptionFor')}
                  >
                    Yourself
                  </Radio>
                  <Radio
                    className='radio'
                    value='family'
                    {...register('adoptionFor')}
                  >
                    Your family
                  </Radio>
                  <Radio
                    className='radio'
                    value='friends'
                    {...register('adoptionFor')}
                  >
                    Your friends
                  </Radio>
                </VStack>
              </RadioGroup>
            </FormControl>

            <FormControl isRequired className='form-control'>
              <FormLabel className='form-label'>Are you a pet owner?</FormLabel>
              <RadioGroup>
                <VStack align='start' className='radio-group'>
                  <Radio
                    className='radio'
                    value='current'
                    {...register('petOwner')}
                  >
                    Current
                  </Radio>
                  <Radio
                    className='radio'
                    value='past'
                    {...register('petOwner')}
                  >
                    Past
                  </Radio>
                  <Radio
                    className='radio'
                    value='first-time'
                    {...register('petOwner')}
                  >
                    First Time
                  </Radio>
                </VStack>
              </RadioGroup>
            </FormControl>

            <FormControl isRequired className='form-control'>
              <FormLabel className='form-label'>
                Do you have any pets at home?
              </FormLabel>
              <RadioGroup>
                <VStack align='start' className='radio-group'>
                  <Radio
                    className='radio'
                    value='none'
                    {...register('petsAtHome')}
                  >
                    None
                  </Radio>
                  <Radio
                    className='radio'
                    value='dog'
                    {...register('petsAtHome')}
                  >
                    Dog
                  </Radio>
                  <Radio
                    className='radio'
                    value='cat'
                    {...register('petsAtHome')}
                  >
                    Cat
                  </Radio>
                  <Radio
                    className='radio'
                    value='both'
                    {...register('petsAtHome')}
                  >
                    Both
                  </Radio>
                </VStack>
              </RadioGroup>
            </FormControl>

            <FormControl isRequired className='form-control'>
              <FormLabel className='form-label'>
                What type of home do you live in?
              </FormLabel>
              <RadioGroup>
                <VStack align='start' className='radio-group'>
                  <Radio
                    className='radio'
                    value='apartment'
                    {...register('homeType')}
                  >
                    Apartment
                  </Radio>
                  <Radio
                    className='radio'
                    value='house'
                    {...register('homeType')}
                  >
                    House
                  </Radio>
                  <Radio
                    className='radio'
                    value='condo'
                    {...register('homeType')}
                  >
                    Condo
                  </Radio>
                </VStack>
              </RadioGroup>
            </FormControl>

            <FormControl isRequired className='form-control'>
              <FormLabel className='form-label'>
                Who will be responsible for the pet’s care?
              </FormLabel>
              <RadioGroup>
                <VStack align='start' className='radio-group'>
                  <Radio
                    className='radio'
                    value='me'
                    {...register('petCareResponsible')}
                  >
                    Yourself
                  </Radio>
                  <Radio
                    className='radio'
                    value='family'
                    {...register('petCareResponsible')}
                  >
                    Your family
                  </Radio>
                </VStack>
              </RadioGroup>
            </FormControl>

            <FormControl isRequired className='form-control'>
              <FormLabel className='form-label'>
                Are you prepared for the financial responsibilities of pet
                ownership?
              </FormLabel>
              <RadioGroup>
                <VStack align='start' className='radio-group'>
                  <Radio
                    className='radio'
                    value='yes'
                    {...register('financialPreparedness')}
                  >
                    Yes
                  </Radio>
                  <Radio
                    className='radio'
                    value='no'
                    {...register('financialPreparedness')}
                  >
                    No
                  </Radio>
                </VStack>
              </RadioGroup>
            </FormControl>

            <FormControl isRequired className='form-control'>
              <FormLabel className='form-label'>
                Why do you want to adopt a pet?
              </FormLabel>
              <Textarea
                placeholder='Describe why you want to adopt a pet'
                {...register('adoptionReason')}
              />
            </FormControl>

            <Heading className='heading'>
              Provide The Information Of The Adopter{' '}
            </Heading>
            <Box
              maxW='lg'
              mx='auto'
              mt={10}
              p={5}
              borderWidth={1}
              borderRadius='lg'
            >
              <VStack spacing={4}>
                <FormControl
                  isRequired
                  isInvalid={!!errors.firstName}
                  className='form-control'
                >
                  <FormLabel className='form-label' htmlFor='firstName'>
                    First Name
                  </FormLabel>
                  <Input
                    type='text'
                    placeholder='Enter your first name'
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
                <FormControl
                  isRequired
                  isInvalid={!!errors.lastName}
                  className='form-control'
                >
                  <FormLabel className='form-label' htmlFor='lastName'>
                    Last Name
                  </FormLabel>
                  <Input
                    type='text'
                    placeholder='Enter your last name'
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
                <FormControl
                  isRequired
                  isInvalid={!!errors.lastName}
                  className='form-control'
                >
                  <FormLabel className='form-label' htmlFor='email'>
                    Email
                  </FormLabel>
                  <Input
                    type='text'
                    placeholder='Enter your email'
                    {...register('email', {
                      required: 'email is required. 😉',
                    })}
                  />
                  {errors.email && (
                    <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl
                  isRequired
                  isInvalid={!!errors.phoneNumber}
                  className='form-control'
                >
                  <FormLabel className='form-label' htmlFor='tel'>
                    Phone Number
                  </FormLabel>
                  <Input
                    type='tel'
                    placeholder='Enter your contact number'
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
                <FormControl
                  isRequired
                  isInvalid={!!errors.address}
                  className='form-control'
                >
                  <FormLabel className='form-label' htmlFor='address'>
                    Address
                  </FormLabel>
                  <Input
                    type='text'
                    placeholder='Enter your address'
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

                <Alert pt='5' status='info'>
                  <AlertIcon className='alert-icon' />
                  Choose the date when our representative will visit you to
                  inspect your house.
                </Alert>
                <FormControl isRequired className='form-control'>
                  <FormLabel className='form-label' htmlFor='date'>
                    Date
                  </FormLabel>
                  <Input
                    type='date'
                    min={getTodayDate()}
                    {...register('inspectionDate', { required: true })}
                  />
                </FormControl>
              </VStack>
            </Box>

            <Button
              type='submit'
              colorScheme='teal'
              size='lg'
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
