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
import { getAllApplications, getAllPets } from '../../apiServices';
import { useQuery } from 'react-query';
import { ApplicationType } from '../adminDashboard/applications/Applications';
import { PetSectionFactory } from '../../factories/PetSectionFactory';

export default function MyAdoptions() {
  const { userId, user } = useAppContext();
  const { data: applications } = useQuery('applications', getAllApplications);
  const { data: pets } = useQuery('pets', getAllPets);

  if (applications === undefined || applications.length === 0) {
    return (
      <Text fontSize='xl' color='red'>
        No applications to display
      </Text>
    );
  }

  if (pets === undefined || pets.length === 0)
    return (
      <Text fontSize='xl' color='red'>
        No applications to display
      </Text>
    );

  const myApplications = applications?.filter(
    (application: ApplicationType) => application.userId === userId
  );

  const myPets = pets?.filter((pet) => user?.petIds.includes(pet._id));
  console.log(myApplications);
  console.log(user);
  return (
    <Box w='100%' p={6}>
      <Box>
        <Heading textAlign={'center'} mb={10}>
          My Applications
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
                  <Button
                    as={Link}
                    to={`/applications/application-details/${myApplication._id}`}
                  >
                    View
                  </Button>
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
        <PetSectionFactory pets={myPets} type='adopted' isAdmin={false} />
      </Box>
    </Box>
  );
}
