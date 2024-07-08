import {
  Card,
  CardBody,
  Button,
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

type PetCardProps = {
  pets: PetType[];
  handleViewDetail: (id: string) => void;
};

export default function PetCard({ pets, handleViewDetail }: PetCardProps) {
  return (
    <>
      {pets.map((pet) => (
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
              <Button
                onClick={() => handleViewDetail(pet._id)}
                variant="solid"
                colorScheme="blue"
                mt={'6'}
              >
                View Detail
              </Button>
            </Stack>
          </CardBody>
        </Card>
      ))}
    </>
  );
}
