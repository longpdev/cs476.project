import { Box, Heading } from '@chakra-ui/react';
import { useAppContext } from '../../contexts/AppContext';
import { getAllApplications } from '../../apiServices';
import { useQuery } from 'react-query';
import { ApplicationType } from '../adminDashboard/applications/Applications';

export default function MyAdoptions() {
  const { userId } = useAppContext();
  const { data: applications } = useQuery('applications', getAllApplications);
  const myApplications = applications?.filter(
    (application: ApplicationType) => application.userId === userId
  );
  console.log(myApplications);
  return (
    <Box w='100%' p={6}>
      <Heading textAlign={'center'} mb={10}>
        My Adoptions
      </Heading>
    </Box>
  );
}
