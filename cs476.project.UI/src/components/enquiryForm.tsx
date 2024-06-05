import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Center,
  useToast,
} from "@chakra-ui/react";
import emailjs from "emailjs-com";

const EnquiryForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
        "service_qmtlzyg",
        "template_op6z9ie",
        templateParams,
        "AYortGd8xgfWlyzPP"
      )
      .then(
        (/*esponse*/) => {
          toast({
            title: "Email Sent.",
            description: "Your enquiry has been sent successfully.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          setName("");
          setEmail("");
          setMessage("");
        },
        (/*error*/) => {
          toast({
            title: "Error.",
            description: "An error occurred while sending your enquiry.",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      );
  };

  return (
    <>
      <Center margin={5}>Submit your enquiry here</Center>
      <Box
        border="5px solid grey"
        padding="10"
        maxWidth="500px"
        mx="auto"
        mt="50px"
      >
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
