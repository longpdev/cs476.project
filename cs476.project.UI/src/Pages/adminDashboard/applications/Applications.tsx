import { useQuery } from 'react-query';
import { getAllApplications } from '../../../apiServices';

import { Box, Heading } from '@chakra-ui/react';
import { DisplayApplications } from './DisplayApplications';
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
  console.log(applications);

  const pendingApplications = applications?.filter(
    (application: ApplicationType) => application.status == 'pending'
  );
  const historicalApplications = applications?.filter(
    (application: ApplicationType) => application.status != 'pending'
  );
  return (
    <Box pt={8}>
      <Box pb={8}>
        <Heading pb='8' size='lg' color='teal.500'>
          Pending Applications
        </Heading>
        <DisplayApplications applications={pendingApplications} />
      </Box>
      <Box pb={8}>
        <Heading pb='8' size='lg' color='teal.500'>
          Historical Applications
        </Heading>
        <DisplayApplications applications={historicalApplications} />
      </Box>
    </Box>
  );
};
