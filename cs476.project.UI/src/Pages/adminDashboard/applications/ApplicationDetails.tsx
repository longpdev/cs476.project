import React, { useEffect, useState } from 'react';
import { Box, Button, Heading, Grid, Text } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { getApplicationById, fetchPetById } from '../../../apiServices';
import PetDetailCard from '../../FindAPet/PetDetailCard';
import CustomerInfo from './CustomerInfo';
import { ApplicationType } from './Applications';
import { PetType } from '../../FindAPet/FindAPet';

export const ApplicationDetail = () => {
  const { id } = useParams();

  const {
    data: applicationData,
    isLoading: isAppLoading,
    error: appError,
  } = useQuery(['getApplicationById', id], () => getApplicationById(id!), {
    enabled: !!id,
  });

  const petId = applicationData?.petId;

  const {
    data: petData,
    isLoading: isPetLoading,
    isError: isPetError,
  } = useQuery(['getPetById', petId], () => fetchPetById(petId!), {
    enabled: !!petId,
  });

  const [application, setApplication] = useState<ApplicationType | null>(null);
  const [pet, setPet] = useState<PetType | null>(null);

  useEffect(() => {
    if (applicationData) {
      setApplication(applicationData);
    }
    if (petData) {
      setPet(petData);
    }
  }, [applicationData, petData]);

  const handleApproval = () => {
    console.log('handleApproval');
  };

  const handleReject = () => {
    console.log('handleReject');
  };

  if (isAppLoading || isPetLoading) {
    return <Text>Loading...</Text>;
  }

  if (appError || isPetError) {
    return <Text>Error loading details</Text>;
  }

  if (!application) {
    return <Text>No application found</Text>;
  }

  return (
    <Box m={12}>
      <Heading textAlign='center'>Application Detail</Heading>
      <Box paddingTop={8}>
        <Grid templateColumns={{ base: '1fr', md: '1fr 2fr' }} gap={6}>
          <CustomerInfo application={application} />
          <Box>
            <Heading textAlign={'center'} as={'h2'} size='lg'>
              Pet Details
            </Heading>
            {pet ? (
              <PetDetailCard pet={pet} />
            ) : (
              <Text>Loading pet details...</Text>
            )}
          </Box>
        </Grid>
      </Box>
      <Box paddingTop={8} display='flex' justifyContent='center'>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={4}>
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
        </Grid>
      </Box>
    </Box>
  );
};
