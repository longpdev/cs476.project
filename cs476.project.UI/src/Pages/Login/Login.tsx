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
import { useForm } from 'react-hook-form';
import { LoginData } from '../../types/loginData';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { loginAPI } from '../../apiServices';
import { useAppContext } from '../../contexts/AppContext';
export function Login() {
  const { showToast } = useAppContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const navigate = useNavigate();

  const mutation = useMutation(loginAPI, {
    onSuccess: () => {
      showToast({ message: 'Login successful', type: 'success' }),
        navigate('/');
      window.location.reload();
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
        Login
      </Heading>
      <form onSubmit={onSubmit} noValidate>
        <VStack spacing={4}>
          <FormControl isRequired isInvalid={!!errors.email}>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input
              id='email'
              type='email'
              placeholder='Enter your email'
              {...register('email', { required: 'Email is required. 😉' })}
            />
            {errors.email && (
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.password}>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input
              id='password'
              type='password'
              placeholder='Enter your password'
              {...register('password', {
                required: 'Password is required. 😉',
              })}
            />
            {errors.password && (
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            )}
            <FormErrorMessage></FormErrorMessage>
          </FormControl>

          <Button mt={4} colorScheme='teal' type='submit' width='full'>
            Login
          </Button>

          <Box textAlign='center' mt={4}>
            <Link as={RouterLink} to='/Register' color='teal.500'>
              Do not have an account? Sign up here!<br></br>
            </Link>

            <Link as={RouterLink} to='/ForgotPassword' color='teal.500'>
              Forgot Password?
            </Link>
          </Box>
        </VStack>
      </form>
    </Box>
  );
}
