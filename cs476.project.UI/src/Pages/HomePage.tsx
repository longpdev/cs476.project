import {Box, Input, Text} from '@chakra-ui/react';

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'

import {
    Heading,
    SimpleGrid
} from '@chakra-ui/react';


import { Textarea } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

export default function Header ()
{
    return (
        <>
            <Box bg='yellow' w='100%' p={4} color='red'>
                <Text> This is Home Page </Text>
            </Box>

            <Heading as="h1" size="2xl" textAlign="center" m="20">
                Announcements and Updates
            </Heading>
            <Button colorScheme='teal' variant='link'>
                    Learn More
            </Button>

            <Heading as="h1" size="2xl" textAlign="center" m="20">
                Contact Us
            </Heading>

            <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input type='string'/>
                <FormLabel>Last Name</FormLabel>
                <Input type='string'/>
                <FormLabel>Email</FormLabel>
                <Input type='email'/>
                <FormLabel>Subject</FormLabel>
                <Input type='string'/>
                <FormLabel>Message</FormLabel>
                <Textarea/>
                <Button colorScheme='teal' variant='outline'>
                    Submit
                </Button>
            </FormControl>
        </>
    )
}