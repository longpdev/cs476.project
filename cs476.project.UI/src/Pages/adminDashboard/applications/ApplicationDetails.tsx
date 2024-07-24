import React, { useEffect, useState } from 'react';
import { Box, Button, Heading, Grid, Text } from '@chakra-ui/react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import {
  getApplicationById,
  fetchPetById,
  updateApplicationStatus,
} from '../../../apiServices';
import PetDetailCard from '../../FindAPet/PetDetailCard';
import CustomerInfo from './CustomerInfo';
import { ApplicationType } from './Applications';
import { PetType } from '../../FindAPet/FindAPet';

export const ApplicationDetail = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery(
    ['getApplicationById', id],
    () => getApplicationById(id!),
    {
      enabled: !!id,
    }
  );

  const petId = data?.petId;

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
    if (data) {
      setApplication(data);
    }
    if (petData) {
      setPet(petData);
    }
  }, [data, petData]);
  const dataTest = { id: '66a01c7143895f91d3ccee6d', status: 'approved' };
  const mutation = useMutation(() => updateApplicationStatus(dataTest), {
    onSuccess: () => {
      queryClient.invalidateQueries(['getApplicationById', id]);
    },
  });

  const handleApproval = () => {
    mutation.mutate();
  };

  const handleReject = () => {
    mutation.mutate();
  };

  if (isLoading || isPetLoading) {
    return <Text>Loading...</Text>;
  }

  if (error || isPetError) {
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
            isLoading={mutation.isLoading}
          >
            Approve application
          </Button>
          <Button
            colorScheme='red'
            size='md'
            width='200px'
            onClick={handleReject}
            isLoading={mutation.isLoading}
          >
            Reject application
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};
