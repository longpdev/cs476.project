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
        'AYortGd8xgfWlyzPP'
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
        border="3px solid grey"
        padding="10"
        maxWidth="500px"
        mx="auto"
        mt="50px"
        mb="50px"
      >
        <Heading
          mb={10}
          bgGradient="linear(to-r, teal.500, green.500)"
          bgClip="text"
          fontSize="5xl"
          fontWeight="bold"
          textAlign="center"
        >
          Get in touch!
        </Heading>

        <form onSubmit={handleSubmit}>
          <FormControl id="name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id="email" isRequired mt={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="message" isRequired mt={4}>
            <FormLabel>Message</FormLabel>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormControl>
          <Button mt={4} colorScheme="teal" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
};

export default EnquiryForm;
