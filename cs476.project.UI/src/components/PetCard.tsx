import {
  Card,
  CardBody,
  Text,
  Stack,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Image,
  Heading,
  Button,
} from '@chakra-ui/react';
import { PetType } from '../Pages/FindAPet';
import { Link } from 'react-router-dom';

type PetCardProps = {
  pet: PetType;
};

export default function PetCard({ pet }: PetCardProps) {
  console.log('Pet:', pet._id);
  return (
    <>
      <Card maxW="sm" key={pet._id}>
        <CardBody>
          <Image
            width={'100%'}
            src={pet.imageURLs[0]}
            alt="Pet Image"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="1">
            <Heading textAlign={'center'} as="b" size="lg" mb="6">
              {pet.name}
            </Heading>
            <TableContainer m="0px">
              <Table variant="striped" colorScheme="teal">
                <Tbody>
                  <Tr>
                    <Td>
                      <Text as="b">Breed: </Text>
                      {pet.breed}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Text as="b">Age: </Text>
                      {pet.age}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Text as="b">Sex: </Text>
                      {pet.sex}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            <Button
              as={Link}
              to={`/editPet/${pet._id}`}
              colorScheme="teal"
              variant="outline"
              width="full"
              mt="2"
            >
              Edit Pet
            </Button>
            <Button
              as={Link}
              to={`/pet/${pet._id}`}
              colorScheme="teal"
              variant="solid"
              width="full"
              mt="2"
            >
              View Detail
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
