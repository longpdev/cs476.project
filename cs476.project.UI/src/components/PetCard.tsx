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
import { useNavigate } from 'react-router-dom';

type PetCardProps = {
  pets: PetType[];
};

export default function PetCard({ pets }: PetCardProps) {
  const navigate = useNavigate();

  const handleViewDetail = (id: string) => {
    navigate(`/${id}`);
  };
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
                    <Tr>
                      <Td>
                        {' '}
                        <Text as="b"> Age : </Text>
                        {pet.age}
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        {' '}
                        <Text as="b"> Sex : </Text>
                        {pet.sex}
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
