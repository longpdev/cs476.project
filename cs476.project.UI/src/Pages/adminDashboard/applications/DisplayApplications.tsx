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
    <Box overflowX='auto' bg='white' p={5} boxShadow='md' borderRadius='md'>
      <Table variant='striped' colorScheme='teal' size='md' width='full'>
        <Thead>
          <Tr>
            <Th color='teal.500'>Full Name</Th>
            <Th color='teal.500'>Email</Th>
            <Th color='teal.500'>Phone Number</Th>
            <Th color='teal.500'>Status</Th>
            <Th color='teal.500'>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {applications?.map((application: ApplicationType) => (
            <Tr key={application._id}>
              <Td maxW='200px' isTruncated>
                {application.firstName + ' ' + application.lastName}
              </Td>
              <Td maxW='200px' isTruncated>
                {application.email}
              </Td>
              <Td maxW='200px' isTruncated>
                {application.phoneNumber}
              </Td>
              <Td>{application.status}</Td>
              <Td>
                <Button
                  as={Link}
                  to={`/applications/application-details/${application._id}`}
                  colorScheme='teal'
                  size='sm'
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
