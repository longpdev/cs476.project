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
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { PetAdoptionStepper } from '../components/petAdoptionStepper';

interface FormValues {
  adoptionFor: string;
  petOwner: string;
  petsAtHome: string;
  homeType: string;
  petCareResponsible: string;
  financialPreparedness: string;
  adoptionReason: string;

  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  address: string;
  inspectionDate: string;
}

export const PetAdoptionStep = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    //currently console logging the data
    //next sprint integrate this with database
    console.log(data);
  };

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
        <VStack as="form" spacing={4} onSubmit={handleSubmit(onSubmit)}>
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
              <FormControl id="first-name" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input placeholder="First Name" {...register('firstName')} />
              </FormControl>
              <FormControl id="last-name" isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="Last Name" {...register('lastName')} />
              </FormControl>
              <FormControl id="phone-number" isRequired>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  {...register('phoneNumber')}
                />
              </FormControl>
              <FormControl id="address" isRequired>
                <FormLabel>Address</FormLabel>
                <Textarea placeholder="Address" {...register('address')} />
              </FormControl>

              <Alert pt="5" status="info">
                <AlertIcon />
                Choose the date when our representative will visit you to
                inspect your house.
              </Alert>
              <FormControl id="date" isRequired>
                <FormLabel>Date</FormLabel>
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
          >
            Submit
          </Button>
        </VStack>
      </Box>
    </>
  );
};
