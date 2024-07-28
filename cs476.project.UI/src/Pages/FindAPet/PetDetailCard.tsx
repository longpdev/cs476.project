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
import { Pet } from './PetDetail';

interface PetDetailCardProps {
  pet: Pet;
}

const PetDetailCard: React.FC<PetDetailCardProps> = ({ pet }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} m={{ base: '10', lg: '5' }}>
      <Box pl={{ base: '0', lg: '10' }} pt={{ base: '0', lg: '5' }}>
        <Box alignItems={'center'}>
          <Image
            minWidth={{ base: '200px', lg: '400px' }}
            height={{ base: '300px', lg: '400px' }}
            src={
              pet.imageURLs[0] != undefined
                ? pet.imageURLs[0]
                : '../../src/assets/pet-image-placeholder.jpg'
            }
            alt={pet.name}
          />
        </Box>
      </Box>

      <Box px={{ base: '0', lg: '10' }} pt={{ base: '0', lg: '5' }}>
        <Box py='5'>
          <TableContainer>
            <Table variant='striped' colorScheme='cyan'>
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
        <Box> <Text as='b'>Description:</Text> {pet.description}</Box>
      </Box>
    </SimpleGrid>
  );
};

export default PetDetailCard;
