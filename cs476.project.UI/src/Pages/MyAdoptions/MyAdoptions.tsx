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
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext';
import { getAllApplications } from '../../apiServices';
import { useQuery } from 'react-query';
import { ApplicationType } from '../adminDashboard/applications/Applications';
import { useEffect, useState } from 'react';

export default function MyAdoptions() {
  const { userId } = useAppContext();
  const { data } = useQuery('applications', getAllApplications);
  const [applications, setApplications] = useState(data);
  useEffect(() => {
    if (data) setApplications(data);
  }, [data]);
  const myApplications = applications?.filter(
    (application: ApplicationType) => application.userId === userId
  );
  console.log(myApplications);
  return (
    <Box w='100%' p={6}>
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
          <Tr key={myApplications._id}>
            <Td maxW='200px' isTruncated>
              {myApplications.firstName + ' ' + myApplications.lastName}
            </Td>
            <Td maxW='200px' isTruncated>
              {myApplications.email}
            </Td>
            <Td maxW='200px' isTruncated>
              {myApplications.phoneNumber}
            </Td>
            <Td>{myApplications.petId}</Td>
            <Td>{myApplications.status}</Td>
            <Td>
              <Button as={Link}>View</Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
}
