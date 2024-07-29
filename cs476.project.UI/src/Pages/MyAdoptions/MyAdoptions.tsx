import {
  Box,
  Button,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext';
import { getAllApplications } from '../../apiServices';
import { useQuery } from 'react-query';
import { ApplicationType } from '../adminDashboard/applications/Applications';

export default function MyAdoptions() {
  const { userId } = useAppContext();
  const { data: applications } = useQuery('applications', getAllApplications);

  if (applications === undefined || applications.length === 0) {
    return (
      <Text fontSize='xl' color='red'>
        No applications to display
      </Text>
    );
  }

  const myApplications = applications?.filter(
    (application: ApplicationType) => application.userId === userId
  );
  console.log(myApplications);

  return (
    <Box w='100%' p={6}>
      <Box>
        <Heading textAlign={'center'} mb={10}>
          My Adoptions
        </Heading>

        <Table variant='simple' width='full'>
          <Thead>
            <Tr>
              <Th>User</Th>
              <Th>Email</Th>
              <Th>Phone Number</Th>
              <Th>Pet</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {myApplications?.map((myApplication: ApplicationType) => (
              <Tr>
                <Td maxW='200px' isTruncated>
                  {myApplication.firstName + ' ' + myApplication.lastName}
                </Td>
                <Td maxW='200px' isTruncated>
                  {myApplication.email}
                </Td>
                <Td maxW='200px' isTruncated>
                  {myApplication.phoneNumber}
                </Td>
                <Td>{myApplication.petId}</Td>
                <Td>{myApplication.status}</Td>
                <Td>
                  <Button as={Link}>View</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      <Box pt={'50px'}>
        <Heading textAlign={'center'} mb={10}>
          My Pets
        </Heading>
      </Box>
    </Box>
  );
}
