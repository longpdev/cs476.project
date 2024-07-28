import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ApplicationType } from './Applications';

interface DisplayApplicationsProps {
  applications: ApplicationType[];
}

export const DisplayApplications = ({
  applications,
}: DisplayApplicationsProps) => {
  if (applications.length === 0) {
    return (
      <Text fontSize='xl' color='red'>
        No applications to display
      </Text>
    );
  }

  return (
    <Table variant='simple'>
      <Thead>
        <Tr>
          <Th>User</Th>
          <Th>Email</Th>
          <Th>Phone Number</Th>
          <Th>Status</Th>
        </Tr>
      </Thead>
      <Tbody>
        {applications?.map((application: ApplicationType) => (
          <Tr key={application._id}>
            <Td maxW='80px'>
              {application.firstName + ' ' + application.lastName}
            </Td>
            <Td>{application.email}</Td>
            <Td>{application.phoneNumber}</Td>
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
  );
};
