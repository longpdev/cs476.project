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
            alt="Green double couch with wooden legs"
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
                      {' '}
                      <Text as="b">Breed : </Text>
                      {pet.breed}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            <Link to={`/editPet/${pet._id}`}>View Detail</Link>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
