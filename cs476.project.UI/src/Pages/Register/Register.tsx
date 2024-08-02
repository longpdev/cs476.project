import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import { registerAPI } from '../../apiServices';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Button,
  Box,
  Heading,
  Link,
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { RegisterData } from '../../types/registerData';
import { useAppContext } from '../../contexts/AppContext';

export function Register() {
  const { showToast } = useAppContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<RegisterData>();
  const navigate = useNavigate();
  const mutation = useMutation(registerAPI, {
    onSuccess: () => {
      showToast({ message: 'Registration successful!', type: 'success' }),
        navigate('/Login');
    },
    onError: (error: Error) =>
      showToast({ message: error.message, type: 'error' }),
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <Box
      maxW='md'
      mx='auto'
      mt='8'
      border='1px'
      borderColor='gray.200'
      padding='20px'
    >
      <Heading as='h2' mb='6' textAlign='center'>
        Sign up as a new member
      </Heading>
      <form onSubmit={onSubmit} noValidate>
        <VStack spacing={4}>
          <FormControl isRequired isInvalid={!!errors.email}>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input
              type='email'
              placeholder='Enter your email'
              {...register('email', {
                required: 'Email is required. 😉',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && (
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.firstName}>
            <FormLabel htmlFor='firstName'>First Name</FormLabel>
            <Input
              type='text'
              placeholder='Enter your first name'
              {...register('firstName', {
                required: 'First name is required. 😉',
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: 'First name must contain only letters',
                },
              })}
            />
            {errors.firstName && (
              <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.lastName}>
            <FormLabel htmlFor='lastName'>Last Name</FormLabel>
            <Input
              type='text'
              placeholder='Enter your last name'
              {...register('lastName', {
                required: 'Last name is required. 😉',
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: 'Last name must contain only letters',
                },
              })}
            />
            {errors.lastName && (
              <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.phoneNumber}>
            <FormLabel htmlFor='tel'>Phone Number</FormLabel>
            <Input
              type='tel'
              placeholder='Enter your contact number'
              {...register('phoneNumber', {
                required: 'Phone number is required. 😉',
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Phone number must be numeric',
                },
              })}
            />
            {errors.phoneNumber && (
              <FormErrorMessage>{errors.phoneNumber?.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.postalCode}>
            <FormLabel htmlFor='postalcode'>Postal Code</FormLabel>
            <Input
              type='text'
              placeholder='Enter your postal code'
              {...register('postalCode', {
                required: 'Postal code is required. 😉',
                pattern: {
                  value: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
                  message: 'Invalid postal code format',
                },
              })}
            />
            {errors.postalCode && (
              <FormErrorMessage>{errors.postalCode?.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.password}>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input
              type='password'
              {...register('password', {
                required: 'Password is required. 😉 ',
                minLength: { value: 6, message: 'Need at least 6 characters' },
              })}
              placeholder='Enter your password'
            />
            {errors.password && (
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.repassword}>
            <FormLabel htmlFor='password'>Confirm Password</FormLabel>
            <Input
              type='password'
              placeholder='Confirm your password'
              {...register('repassword', {
                required: 'Passwords need to be matched. 😉 ',
                validate: (value) =>
                  value === getValues('password') ||
                  'Passwords need to be matched. 😉',
              })}
            />
            {errors.repassword && (
              <FormErrorMessage>{errors.repassword?.message}</FormErrorMessage>
            )}
          </FormControl>

          <Button
            mt={4}
            colorScheme='teal'
            type='submit'
            width='full'
            formNoValidate
          >
            Register
          </Button>

          <Link as={RouterLink} to='/Login' color='teal.500'>
            Already a User?
          </Link>
        </VStack>
      </form>
    </Box>
  );
}
