import React, { useState } from "react";
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
} from "@chakra-ui/react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getAllUser, updateUser, deleteUser } from "../../../apiServices";

export default function User() {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUser,
    refetchOnWindowFocus: false,
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const queryClient = useQueryClient();

  const updateUserMutation = useMutation(updateUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
      onClose();
    },
  });

  const deleteUserMutation = useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

  const handleEdit = (user: any) => {
    setSelectedUser(user);
    onOpen();
  };

  const handleDelete = (user: any) => {
    console.log("user", user);
    deleteUserMutation.mutate(user?._id);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("selectedUser", selectedUser);
    const query = {
      id: selectedUser?._id,
      userDetail: {
        email: selectedUser?.email,
        firstName: selectedUser?.firstName,
        lastName: selectedUser?.lastName,
        phoneNumber: selectedUser?.phoneNumber,
      },
    };
    updateUserMutation.mutate(query);
  };

  return (
    <Box bg="grey" w="100%" p={4} color="white">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Email</Th>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Phone Number</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users?.map((user: any) => (
            <Tr key={user.id}>
              <Td>{user.email}</Td>
              <Td>{user.firstName}</Td>
              <Td>{user.lastName}</Td>
              <Td>{user.phoneNumber}</Td>
              <Td>
                <Button onClick={() => handleEdit(user)} mr={2}>
                  Edit
                </Button>
                <Button colorScheme="red" onClick={() => handleDelete(user)}>
                  Delete
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
                name="email"
                value={selectedUser?.email || ""}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>First Name</FormLabel>
              <Input
                name="firstName"
                value={selectedUser?.firstName || ""}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Last Name</FormLabel>
              <Input
                name="lastName"
                value={selectedUser?.lastName || ""}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Phone Number</FormLabel>
              <Input
                name="phoneNumber"
                value={selectedUser?.phoneNumber || ""}
                onChange={handleChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
