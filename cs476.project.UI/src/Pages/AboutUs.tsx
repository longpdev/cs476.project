import {
  Box,
  Divider,
  Flex,
  Heading,
  Text,
  VStack,
  Image,
} from '@chakra-ui/react';

export default function AboutUs() {
  return (
    <>
      <Box p={8} maxWidth="1200px" mx="auto">
        {/* Main Section */}
        <Box mb={12} textAlign="center">
          <Heading size="2xl" mb={4}>
            Connecting Pets with Loving Homes{' '}
          </Heading>
          <Text fontSize="lg" color="gray.600">
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

        <Flex justify="space-between" mb={12}>
          <Image
            src="https://via.placeholder.com/150"
            alt="Image 3"
            borderRadius="md"
          />
          <Image
            src="https://via.placeholder.com/150"
            alt="Image 4"
            borderRadius="md"
          />
          <Image
            src="https://via.placeholder.com/150"
            alt="Image 5"
            borderRadius="md"
          />
        </Flex>

        <Divider my={8} />

        <VStack align="start" spacing={4}>
          <Heading size="lg">Our mission</Heading>
          <Text>
            We believe in the power of education and community involvement.
            Through our outreach programs, we educate the public on responsible
            pet ownership, the importance of spaying and neutering, and the
            benefits of adopting rather than purchasing pets. Our goal is to
            reduce the number of animals entering shelters and to promote a
            culture of compassion and respect for all living beings.
          </Text>
          <Text>
            Our adoption process is designed to ensure that each pet finds a
            loving, permanent home that matches their unique needs and
            personality. We carefully screen potential adopters and provide
            ongoing support to ensure successful, lifelong placements.
            Additionally, we offer resources and guidance for new pet owners to
            help them navigate the challenges and joys of pet parenthood.
          </Text>
          <Text>
            At Pet Adoption , we are more than just an adoption service; we are
            a community dedicated to improving the lives of pets and their
            humans. Join us in our mission to create a world where every pet is
            cherished and no animal is left behind. Together, we can make a
            difference, one paw at a time.
          </Text>
        </VStack>

        <Divider my={8} />

        <Flex justify="space-around">
          <VStack>
            <Heading size="xl">5000+</Heading>
            <Text>Pets rescued and rehomed since our founding</Text>
          </VStack>
          <VStack>
            <Heading size="xl">2000+</Heading>
            <Text>Successful adoptions annually</Text>
          </VStack>
          <VStack>
            <Heading size="xl">100+</Heading>
            <Text>
              Dedicated volunteers working to ensure every pet gets a second
              chance
            </Text>
          </VStack>
        </Flex>

        <Divider my={8} />

        <Box>
          <Heading size="2xl" mb={4} textAlign="center" color="white">
            Our team
          </Heading>
          <Text fontSize="lg" color="gray.400" textAlign="center" mb={12}>
            Our talented software developer teams are passionate about creating
            innovative solutions to enhance our pet adoption process, ensuring a
            seamless and user-friendly experience for both adopters and animals
            in need.
          </Text>
          <Flex justify="space-around" wrap="wrap">
            <VStack spacing={4} mb={8}>
              <Image src="https://via.placeholder.com/150" borderRadius="md" />
              <Text fontWeight="bold" fontSize="lg" color="gray.800">
                Long Pham
              </Text>
              <Text color="gray.400">4th Year CS Students</Text>
            </VStack>
            <VStack spacing={4} mb={8}>
              <Image
                src="https://via.placeholder.com/150"
                alt="Aniket Bhavsar"
                borderRadius="md"
              />
              <Text fontWeight="bold" fontSize="lg" color="gray.800">
                Aniket Bhavsar
              </Text>
              <Text color="gray.400">4th Year CS Students</Text>
            </VStack>
            <VStack spacing={4} mb={8}>
              <Image
                src="https://via.placeholder.com/150"
                alt="Long Tran"
                borderRadius="md"
              />
              <Text fontWeight="bold" fontSize="lg" color="gray.800">
                Long Tran
              </Text>
              <Text color="gray.400">4th Year CS Students</Text>
            </VStack>
            <VStack spacing={4} mb={8}>
              <Image
                src="https://via.placeholder.com/150"
                alt="Aabhushan"
                borderRadius="md"
              />
              <Text fontWeight="bold" fontSize="lg" color="gray.800">
                Aabhushan
              </Text>
              <Text color="gray.400">4th Year CS Students</Text>
            </VStack>
          </Flex>
        </Box>

        <Divider my={8} />
      </Box>
    </>
  );
}
