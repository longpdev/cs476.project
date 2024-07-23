import { useQuery } from 'react-query';
import { getAllApplications } from '../../../apiServices';

import { Button, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
export interface ApplicationType {
  _id: string;
  userId: string;
  petId: string;
  adoptionFor: string;
  petOwner: string;
  petsAtHome: string;
  homeType: string;
  petCareResponsible: string;
  financialPreparedness: string;
  adoptionReason: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  address: string;
  inspectionDate: Date;
  status: 'pending' | 'approved' | 'rejected';
}

export const Applications = () => {
  const { data: applications } = useQuery('applications', getAllApplications);

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
            <Td>{application.firstName + ' ' + application.lastName}</Td>
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
