import React, { useEffect, useState } from 'react';
import { Box, Button, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import PetDetail from '../../FindAPet/PetDetail';
import { useQuery } from 'react-query';
import { getApplicationById, fetchPetById } from '../../../apiServices';
import { Link, useParams } from 'react-router-dom';
import { ApplicationType } from './Applications';
import PetDetailCard from '../../FindAPet/PetDetailCard';
import { PetType } from '../../FindAPet/FindAPet';
import CustomerInfo from './CustomerInfo';
const CustomerInfoRow = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => {
  return (
    <Box>
      <Text as='b'>{title}</Text>
      <Text>{value}</Text>
    </Box>
  );
};

export const ApplicationDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery(
    ['getApplicationById', id],
    () => getApplicationById(id!),
    {
      enabled: !!id,
    }
  );
  const {
    data: petData,
    isLoading: isPetLoading,
    isError: isPetError,
  } = useQuery(['getPetById', data?.petId], () => fetchPetById(data?.petId!), {
    enabled: !!data?.petId,
  });

  const [application, setApplication] = useState<ApplicationType | null>(null);
  const [pet, setPet] = useState<PetType | null>(null);

  useEffect(() => {
    if (data) {
      setApplication(data);
    }
    if (petData) {
      setPet(petData);
    }
  }, [data, petData]);

  if (isLoading) {
    return <Text>Loading application details...</Text>;
  }

  if (error) {
    return <Text>Error loading application details</Text>;
  }

  if (isPetLoading) {
    return <Text>Loading pet details...</Text>;
  }

  if (isPetError) {
    return <Text>Error loading pet details</Text>;
  }

  if (!application) {
    return <Text>No application found</Text>;
  }

  const handleApproval = () => {
    console.log('approve');
  };
  const handleReject = () => {
    console.log('reject');
  };
  console.log('petData', petData);
  return (
    <Box m={12}>
      <Heading textAlign='center'>Application Detail</Heading>
      <Box paddingTop={8}>
        <SimpleGrid columns={2}>
          <CustomerInfo application={application} />
          <Box>
            <Heading textAlign={'center'} as={'h2'} size='lg'>
              Pet Details
            </Heading>
            <PetDetail />
            <PetDetailCard pet={pet!} />
          </Box>
        </SimpleGrid>
      </Box>
      <Box paddingTop={8} display='flex' justifyContent='center'>
        <SimpleGrid columns={3} spacing={4}>
          <Button size='md' width='200px' as={Link} to='/dashboard'>
            Back to Dashboard
          </Button>
          <Button
            colorScheme='green'
            size='md'
            width='200px'
            onClick={handleApproval}
          >
            Approve application
          </Button>
          <Button
            colorScheme='red'
            size='md'
            width='200px'
            onClick={handleReject}
          >
            Reject application
          </Button>
        </SimpleGrid>
      </Box>
    </Box>
  );
};
