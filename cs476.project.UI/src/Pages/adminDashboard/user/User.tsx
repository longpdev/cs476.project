import React, { useState, useEffect } from 'react';
import {
  Box,
  Table,
  Thead,
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
import { getAllUser, updateUser, blockUser } from '../../../apiServices';

interface UserType {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  blocked: boolean;
}

export default function User() {
  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: getAllUser,
    refetchOnWindowFocus: false,
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedUser, setSelectedUser] = useState<UserType | undefined>();
  const [totalUserCount, setTotalUserCount] = useState(0);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (users) {
      setTotalUserCount(users.length);
    }
  }, [users]);

  const updateUserMutation = useMutation(updateUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
      onClose();
    },
  });

  const blockUserMutation = useMutation(blockUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users');
    },
  });

  const handleEdit = (user: UserType) => {
    setSelectedUser(user);
    onOpen();
  };

  const handleBlock = (user: UserType) => {
    const query = {
      id: user?._id,
      blocked: user?.blocked ? false : true,
    };
    blockUserMutation.mutate(query);
  };

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
        email: selectedUser.email,
        firstName: selectedUser.firstName,
        lastName: selectedUser.lastName,
        phoneNumber: selectedUser.phoneNumber,
      },
    };

    updateUserMutation.mutate(query);
  };

  return (
    <Box bg='grey' w='100%' p={4} color='white'>
      <Text mb={4}>Total Users: {totalUserCount}</Text>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th>Email</Th>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Phone Number</Th>
            <Th>Isblocked</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users?.map((user: UserType) => (
            <Tr key={user._id}>
              <Td>{user.email}</Td>
              <Td>{user.firstName}</Td>
              <Td>{user.lastName}</Td>
              <Td>{user.phoneNumber}</Td>
              <Td>{!user.blocked ? 'false' : 'true'}</Td>
              <Td>
                <Button onClick={() => handleEdit(user)} mr={2}>
                  Edit
                </Button>
                <Button
                  colorScheme={!user.blocked ? 'red' : 'green'}
                  onClick={() => handleBlock(user)}
                >
                  {!user.blocked ? 'Block' : 'Unblock'}
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
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
