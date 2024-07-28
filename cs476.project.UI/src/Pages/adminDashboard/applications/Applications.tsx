import { useQuery } from 'react-query';
import { getAllApplications } from '../../../apiServices';

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
import { DisplayApplication, DisplayApplications } from './DisplayApplications';
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
  const pendingApplications = applications.filter(
    (application: ApplicationType) =>
      application.status != 'approved' && application.status != 'rejected'
  );
  const historicalApplications = applications.filter(
    (application: ApplicationType) =>
      application.status == 'approved' || application.status == 'rejected'
  );
  return (
    <Box pt={8}>
      <Box pb={8}>
        <Heading pb='8' size='md'>
          Pending Applications
        </Heading>
        <DisplayApplications applications={pendingApplications} />
      </Box>
      <Box pb={8}>
        <Heading pb='8' size='md'>
          Historical Applications
        </Heading>
        <DisplayApplications applications={historicalApplications} />
      </Box>
    </Box>
  );
};
