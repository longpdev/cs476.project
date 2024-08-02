import { Box, Heading, Text, Container } from '@chakra-ui/react';

const Home = () => {
  return (
    <Container maxW='container.lg' centerContent>
      <Box
        p={8}
        my={12}
        borderWidth={2}
        borderRadius='lg'
        overflow='hidden'
        boxShadow='xl'
        borderColor='teal.500'
      >
        <Heading as='h1' size='xl' mb={6} color='teal.500'>
          Welcome to the Admin Dashboard
        </Heading>
        <Text fontSize='lg' color='teal.900'>
          Here you can manage all the aspects of the website.
        </Text>
      </Box>
    </Container>
  );
};

export default Home;
