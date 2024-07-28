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
  useBreakpointValue, // Chakra UI hook for responsive design
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
  isAdmin: boolean;
  createdDate: Date;
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

  // Responsive padding and font sizes based on breakpoints
  const tableSize = useBreakpointValue({ base: 'sm', md: 'md' });

  return (
    <Box w='100%' p={4}>
      <Text mb={4}>Total Users: {totalUserCount}</Text>
      <Box overflowX='auto'> {/* Make table horizontally scrollable */}
        <Table variant='simple' size={tableSize}>
          <Thead>
            <Tr>
              <Th>Email</Th>
              <Th>Full Name</Th>
              <Th>Joined Date</Th>
              <Th>Phone Number</Th>
              <Th>Status</Th>
              <Th>Role</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users?.map((user: UserType) => (
              <Tr key={user._id}>
                <Td>{user.email}</Td>
                <Td>{user.firstName + ' ' + user.lastName}</Td>
                <Td>
                  {new Date(user.createdDate).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  })}
                </Td>
                <Td>{user.phoneNumber}</Td>
                <Td>
                  <Text color={user.blocked ? 'red' : ''}>
                    {!user.blocked ? 'Active' : 'Blocked'}
                  </Text>
                </Td>
                <Td>
                  <Text color={user.isAdmin ? 'green' : ''}>
                    {!user.isAdmin ? 'User' : 'Admin'}
                  </Text>
                </Td>
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
      </Box>

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
