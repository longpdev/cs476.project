import {
  Box,
  Divider,
  Flex,
  Heading,
  Text,
  VStack,
  Image,
  SimpleGrid,
} from '@chakra-ui/react';
import EnquiryForm from '../../components/enquiryForm';

export default function AboutUs() {
  return (
    <>
      <Box p={8} maxWidth='1200px' mx='auto'>
        <Box mb={12} textAlign='center'>
          <Heading size='2xl' mb={10} color='teal.500'>
            Connecting Pets with Loving Homes
          </Heading>
          <Text fontSize='lg'>
            At Pet Adoption, we are dedicated to rescuing, rehabilitating, and
            rehoming pets in need. Our mission is to provide a safe haven for
            abandoned, neglected, and homeless animals, giving them a second
            chance at life. We work tirelessly to match each pet with a loving
            and suitable forever home, ensuring they receive the care and
            affection they deserve. Through community outreach, education, and
            support, we strive to promote responsible pet ownership and reduce
            the number of animals in shelters. Join us in making a difference,
            one paw at a time.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 2, lg: 4 }} spacing={4} mb={8}>
          <Image
            src='src/assets/about-us-image-1.jpeg'
            alt='Image 1'
            borderRadius='md'
          />
          <Image
            src='src/assets/about-us-image-2.jpeg'
            alt='Image 2'
            borderRadius='md'
          />
          <Image
            src='src/assets/about-us-image-3.jpeg'
            alt='Image 3'
            borderRadius='md'
          />
          <Image
            src='src/assets/about-us-image-4.jpg'
            alt='Image 4'
            borderRadius='md'
          />
        </SimpleGrid>

        <Divider my={8} />

        <Heading size='2xl' mb={4} textAlign='center' color='teal.500'>
          Our mission
        </Heading>
        <VStack align='start' spacing={4}>
          <Text fontSize='lg'>
            We believe in the power of education and community involvement.
            Through our outreach programs, we educate the public on responsible
            pet ownership, the importance of spaying and neutering, and the
            benefits of adopting rather than purchasing pets. Our goal is to
            reduce the number of animals entering shelters and to promote a
            culture of compassion and respect for all living beings.
          </Text>
          <Text fontSize='lg'>
            Our adoption process is designed to ensure that each pet finds a
            loving, permanent home that matches their unique needs and
            personality. We carefully screen potential adopters and provide
            ongoing support to ensure successful, lifelong placements.
            Additionally, we offer resources and guidance for new pet owners to
            help them navigate the challenges and joys of pet parenthood.
          </Text>
          <Text fontSize='lg'>
            At Pet Adoption , we are more than just an adoption service; we are
            a community dedicated to improving the lives of pets and their
            humans. Join us in our mission to create a world where every pet is
            cherished and no animal is left behind. Together, we can make a
            difference, one paw at a time.
          </Text>
        </VStack>

        <Divider my={8} />

        <Flex justify='space-around'>
          <VStack>
            <Heading size={{ base: 'sm', lg: 'xl' }}>5000+</Heading>
            <Text color='gray.400' fontSize={{ base: 'xs', lg: 'md' }}>
              Pets rescued & rehomed
            </Text>
          </VStack>
          <VStack>
            <Heading size={{ base: 'sm', lg: 'xl' }}>2000+</Heading>
            <Text color='gray.400' fontSize={{ base: 'xs', lg: 'md' }}>
              Successful adoptions annually
            </Text>
          </VStack>
          <VStack>
            <Heading size={{ base: 'sm', lg: 'xl' }}>100+</Heading>
            <Text color='gray.400' fontSize={{ base: 'xs', lg: 'md' }}>
              Dedicated volunteers
            </Text>
          </VStack>
        </Flex>

        <Divider my={8} />

        <Box>
          <Heading size='2xl' mb={4} textAlign='center' color='teal.500'>
            Meet the Team
          </Heading>
          <Text fontSize='lg' textAlign='center' mb={12}>
            Our talented software developer teams are passionate about creating
            innovative solutions to enhance our pet adoption process, ensuring a
            seamless and user-friendly experience for both adopters and animals
            in need.
          </Text>
          <Flex justify='space-around' wrap='wrap'>
            <VStack spacing={4} mb={8}>
              <Image
                src='https://avatars.githubusercontent.com/u/113424246?v=4'
                borderRadius='md'
                height='150px'
                width='150px'
              />
              <Text fontWeight='bold' fontSize='lg' color='gray.800'>
                Long Pham
              </Text>
              <Text color='gray.400'>4th Year CS Students</Text>
            </VStack>
            <VStack spacing={4} mb={8}>
              <Image
                src='https://avatars.githubusercontent.com/u/56104171?v=4'
                alt='Aniket Bhavsar'
                borderRadius='md'
                height='150px'
                width='150px'
              />
              <Text fontWeight='bold' fontSize='lg' color='gray.800'>
                Aniket Bhavsar
              </Text>
              <Text color='gray.400'>4th Year CS Students</Text>
            </VStack>
            <VStack spacing={4} mb={8}>
              <Image
                src='https://avatars.githubusercontent.com/u/68406135?v=4'
                alt='Long Tran'
                borderRadius='md'
                height='150px'
                width='150px'
              />
              <Text fontWeight='bold' fontSize='lg' color='gray.800'>
                Long Tran
              </Text>
              <Text color='gray.400'>4th Year CS Students</Text>
            </VStack>
            <VStack spacing={4} mb={8}>
              <Image
                src='https://avatars.githubusercontent.com/u/64291956?v=4'
                alt='Aabhushan'
                borderRadius='md'
                height='150px'
                width='150px'
              />
              <Text fontWeight='bold' fontSize='lg' color='gray.800'>
                Aabhushan
              </Text>
              <Text color='gray.400'>4th Year CS Students</Text>
            </VStack>
          </Flex>
        </Box>

        <Divider my={8} />

        <EnquiryForm />
      </Box>
    </>
  );
}
