import { useQuery } from 'react-query';
import { getAllApplications } from '../../../apiServices';

import { Button, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

interface ApplicationType {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  homeType: string;
}

export const Applications = () => {
  const { data: applications } = useQuery('applications', getAllApplications);

  console.log(applications);
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>First Name</Th>
          <Th>Last Name</Th>
          <Th>Phone Number</Th>
          <Th>Home Type</Th>
        </Tr>
      </Thead>
      <Tbody>
        {applications?.map((application: ApplicationType) => (
          <Tr key={application._id}>
            <Td>{application.firstName}</Td>
            <Td>{application.lastName}</Td>
            <Td>{application.phoneNumber}</Td>
            <Td>{application.homeType}</Td>
            <Td>
              <Button>View</Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
