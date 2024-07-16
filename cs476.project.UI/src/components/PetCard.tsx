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
  useDisclosure,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { PetType } from '../Pages/FindAPet/FindAPet';
import { Link } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { deletePetById } from '../apiServices';

type PetCardProps = {
  pet: PetType;
  isAuthenticated: boolean;
};

export default function PetCard({ pet, isAuthenticated }: PetCardProps) {
  const toast = useToast();
  const queryClient = useQueryClient();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const mutation = useMutation((id: string) => deletePetById(id), {
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
    onError: (error: Error) => {
      const errorMessage =
        error.message || 'There was an error deleting the pet.';
      toast({
        title: 'Error deleting pet.',
        description: errorMessage || 'Error',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    },
  });

  const handleDelete = () => {
    mutation.mutate(pet._id);
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
          //TODO: add isAdmin here when needed
          {isAuthenticated && (
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
          )}
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
          {isAuthenticated && (
            <Button
              colorScheme="red"
              variant="solid"
              width="full"
              mt="2"
              onClick={onOpen}
            >
              Delete Pet
            </Button>
          )}
        </Stack>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete Pet</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Are you sure?</ModalBody>
            <ModalFooter>
              <Button colorScheme="red" onClick={handleDelete}>
                Delete
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </CardBody>
    </Card>
  );
}
