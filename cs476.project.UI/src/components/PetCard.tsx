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
  useToast,
} from '@chakra-ui/react';
import { PetType } from '../Pages/FindAPet';
import { Link } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';

type PetCardProps = {
  pet: PetType;
};

const deletePet = async (id: string) => {
  const response = await fetch(`/api/pets/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.message || 'Failed to delete pet.');
  }
};

export default function PetCard({ pet }: PetCardProps) {
  const toast = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation(() => deletePet(pet._id), {
    onSuccess: () => {
      queryClient.invalidateQueries('pets');
      toast({
        title: 'Pet deleted.',
        description: 'The pet has been deleted successfully.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    },
    onError: (error: any) => {
      const errorMessage =
        error.message || 'There was an error deleting the pet.';
      toast({
        title: 'Error deleting pet.',
        description: errorMessage,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    },
  });

  const handleDelete = () => {
    mutation.mutate();
  };

  return (
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
          <Button
            colorScheme="red"
            variant="solid"
            width="full"
            mt="2"
            onClick={handleDelete}
          >
            Delete Pet
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
}
