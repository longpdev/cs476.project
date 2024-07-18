import React, { useState, useEffect } from 'react';
import {
  Box,
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getAllUser, updateUser } from '../../apiServices';
import { useAppContext } from '../../contexts/AppContext';

interface UserType {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export default function MyAccount() {
  const { userId } = useAppContext();
  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: getAllUser,
    refetchOnWindowFocus: false,
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedUser, setSelectedUser] = useState<UserType | undefined>();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (users) {
      const currentUser = users.find((user: UserType) => user._id === userId);
      setSelectedUser(currentUser);
    }
  }, [users, userId]);

  const updateUserMutation = useMutation(updateUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
      onClose();
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedUser((prev) => ({
      ...prev!,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (!selectedUser) return;
    const query = {
      id: selectedUser._id,
      userDetail: {
        firstName: selectedUser.firstName,
        lastName: selectedUser.lastName,
        phoneNumber: selectedUser.phoneNumber,
        email: selectedUser.email,
      },
    };

    updateUserMutation.mutate(query);
  };

  return (
    <Box bg='grey' w='100%' p={4} color='white'>
      <Text mb={4}>My Account</Text>
      {selectedUser ? (
        <Table variant='simple'>
          <Tbody>
            <Tr>
              <Th>Email</Th>
              <Td>{selectedUser.email}</Td>
            </Tr>
            <Tr>
              <Th>First Name</Th>
              <Td>{selectedUser.firstName}</Td>
            </Tr>
            <Tr>
              <Th>Last Name</Th>
              <Td>{selectedUser.lastName}</Td>
            </Tr>
            <Tr>
              <Th>Phone Number</Th>
              <Td>{selectedUser.phoneNumber}</Td>
            </Tr>
          </Tbody>
        </Table>
      ) : (
        <Text>Loading...</Text>
      )}
      <Button onClick={onOpen} mt={4}>
        Edit
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isDisabled>
              <FormLabel>Email</FormLabel>
              <Input
                name='email'
                value={selectedUser?.email || ''}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>First Name</FormLabel>
              <Input
                name='firstName'
                value={selectedUser?.firstName || ''}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Last Name</FormLabel>
              <Input
                name='lastName'
                value={selectedUser?.lastName || ''}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Phone Number</FormLabel>
              <Input
                name='phoneNumber'
                value={selectedUser?.phoneNumber || ''}
                onChange={handleChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button variant='ghost' onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
