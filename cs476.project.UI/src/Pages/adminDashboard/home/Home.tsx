import { Box, Heading, Text, Container } from '@chakra-ui/react';

const Home = () => {
  return (
    <Container maxW='container.lg' centerContent>
      <Box
        p={6}
        my={12}
        borderWidth={1}
        borderRadius='lg'
        overflow='hidden'
        boxShadow='lg'
        borderColor={'teal'}
      >
        <Heading as='h1' size='xl' mb={4}>
          Welcome to the Admin Dashboard
        </Heading>
        <Text fontSize='lg'>
          Here you can manage all the aspects of the website.
        </Text>
      </Box>
    </Container>
  );
};

export default Home;
