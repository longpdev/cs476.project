import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
  Text,
  Box,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ApplicationType } from './Applications';

interface DisplayApplicationsProps {
  applications: ApplicationType[];
}

export const DisplayApplications = ({
  applications,
}: DisplayApplicationsProps) => {
  if (applications === undefined || applications.length === 0) {
    return (
      <Text fontSize='xl' color='red'>
        No applications to display
      </Text>
    );
  }

  return (
    <Box overflowX='auto'>
      <Table variant='simple' width='full'>
        <Thead>
          <Tr>
            <Th>User</Th>
            <Th>Email</Th>
            <Th>Phone Number</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {applications?.map((application: ApplicationType) => (
            <Tr key={application._id}>
              <Td maxW='200px' isTruncated>
                {application.firstName + ' ' + application.lastName}
              </Td>
              <Td maxW='200px' isTruncated>{application.email}</Td>
              <Td maxW='200px' isTruncated>{application.phoneNumber}</Td>
              <Td>{application.status}</Td>
              <Td>
                <Button
                  as={Link}
                  to={`/applications/application-details/${application._id}`}
                >
                  View
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};