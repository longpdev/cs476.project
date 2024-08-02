import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
  useToast,
} from '@chakra-ui/react';
import emailjs from 'emailjs-com';

const EnquiryForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const toast = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        'service_qmtlzyg',
        'template_op6z9ie',
        templateParams,
        'M_FfpQXX0fCT9ZXYO'
      )
      .then(
        (response) => {
          console.log(response);
          toast({
            title: 'Email Sent.',
            description: 'Your enquiry has been sent successfully.',
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.log(error);
          toast({
            title: 'Error.',
            description: 'An error occurred while sending your enquiry.',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
      );
  };

  return (
    <>
      <Box
        border='3px solid #CBD5E0'
        padding='10'
        maxWidth='600px'
        mx='auto'
        mt='50px'
        mb='50px'
        borderRadius='md'
        boxShadow='lg'
        bgGradient='linear(to-b, teal.50, white)'
      >
        <Heading
          mb={10}
          bgColor='teal.500'
          bgClip='text'
          fontSize='5xl'
          fontWeight='bold'
          textAlign='center'
        >
          Get in touch!
        </Heading>

        <form onSubmit={handleSubmit}>
          <FormControl id='name' isRequired>
            <FormLabel fontWeight='bold' color='teal.500'>
              Name
            </FormLabel>
            <Input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              borderColor='gray.300'
              focusBorderColor='teal.500'
              borderRadius='md'
              boxShadow='sm'
              _hover={{ borderColor: 'teal.400' }}
            />
          </FormControl>
          <FormControl id='email' isRequired mt={4}>
            <FormLabel fontWeight='bold' color='teal.500'>
              Email
            </FormLabel>
            <Input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              borderColor='gray.300'
              focusBorderColor='teal.500'
              borderRadius='md'
              boxShadow='sm'
              _hover={{ borderColor: 'teal.400' }}
            />
          </FormControl>
          <FormControl id='message' isRequired mt={4}>
            <FormLabel fontWeight='bold' color='teal.500'>
              Message
            </FormLabel>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              borderColor='gray.300'
              focusBorderColor='teal.500'
              borderRadius='md'
              boxShadow='sm'
              _hover={{ borderColor: 'teal.400' }}
            />
          </FormControl>
          <Button
            mt={4}
            colorScheme='teal'
            type='submit'
            fontWeight='bold'
            borderRadius='md'
            _hover={{ bg: 'teal.600' }}
            _focus={{ boxShadow: 'outline' }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
};

export default EnquiryForm;
