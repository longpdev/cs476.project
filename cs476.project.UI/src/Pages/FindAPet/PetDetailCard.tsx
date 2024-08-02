import React from 'react';
import {
  Box,
  Text,
  Image,
  SimpleGrid,
  TableContainer,
  Table,
  Tbody,
  Td,
  Tr,
} from '@chakra-ui/react';
import { PetType } from '../../types/PetType';

interface PetDetailCardProps {
  pet: PetType;
}

function formatDate(isoDate: string): string {
  const date = new Date(isoDate);

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const day = date.getUTCDate();
  const month = monthNames[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  return `${month} ${day}, ${year}`;
}
const PetDetailCard: React.FC<PetDetailCardProps> = ({ pet }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} m={{ base: '10', lg: '5' }}>
      <Box pl={{ base: '0', lg: '10' }} pt={{ base: '0', lg: '5' }}>
        <Box display='flex' justifyContent='center'>
          <Image
            minWidth={{ base: '200px', lg: '400px' }}
            height={{ base: '300px', lg: '400px' }}
            src={
              pet.imageURL !== undefined
                ? pet.imageURL
                : '../../src/assets/pet-image-placeholder.jpg'
            }
            alt={pet.name}
            borderRadius='lg'
            boxShadow='lg'
            objectFit='cover'
          />
        </Box>
      </Box>

      <Box px={{ base: '0', lg: '10' }} pt={{ base: '0', lg: '5' }}>
        <Box py='5'>
          <TableContainer
            boxShadow='xl'
            borderRadius='md'
            border='1px solid'
            borderColor='gray.300'
          >
            <Table variant='striped' colorScheme='teal'>
              <Tbody>
                <Tr>
                  <Td>
                    <Text as='b'> Breed: </Text> {pet.breed}
                  </Td>
                  <Td>
                    <Text as='b'> Sex: </Text> {pet.sex}
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text as='b'> Height: </Text> {pet.height}
                  </Td>
                  <Td>
                    <Text as='b'> Weight: </Text> {pet.weight}
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text as='b'> Colour: </Text> {pet.colour}
                  </Td>
                  <Td>
                    <Text as='b'> Age: </Text> {pet.age}
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text as='b'>Trained:</Text> {pet.trained}
                  </Td>
                  <Td>
                    <Text as='b'>Health:</Text> {pet.health}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Box>
          <Text as='b'>Listing Date:</Text> {formatDate(pet.createdDate)}
        </Box>
        <Box>
          <Text as='b'>Description:</Text> {pet.description}
        </Box>
      </Box>
    </SimpleGrid>
  );
};

export default PetDetailCard;
