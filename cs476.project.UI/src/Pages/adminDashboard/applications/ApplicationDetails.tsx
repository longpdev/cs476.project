import React, { useEffect, useState } from 'react';
import { Box, Button, Heading, Grid, Text } from '@chakra-ui/react';
import { useMutation, useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  getApplicationById,
  fetchPetById,
  updateApplicationStatus,
  updatePetStatusById,
  updateUserPetIds,
} from '../../../apiServices';
import PetDetailCard from '../../FindAPet/PetDetailCard';
import CustomerInfo from './CustomerInfo';
import { ApplicationType } from './Applications';
import { PetType } from '../../FindAPet/FindAPet';
import { useAppContext } from '../../../contexts/AppContext';

export const ApplicationDetail = () => {
  const { id } = useParams();
  const { showToast, userId } = useAppContext();
  const navigate = useNavigate();
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

  const petMutation = useMutation(
    (data: { id: string; status: string; ownerId: string }) =>
      updatePetStatusById(data),
    {
      onSuccess: () => {
        showToast({
          message: `Pet status updated successfully!`,
          type: 'success',
        });
      },
    }
  );

  const applicationMutation = useMutation(
    (data: { id: string; status: string }) => updateApplicationStatus(data),
    {
      onSuccess: () => {
        showToast({
          message: `Application updated successfully!`,
          type: 'success',
        });
        navigate('/dashboard');
      },
    }
  );

  const userMutation = useMutation(
    (data: { id: string; adoptedPetId: string }) => updateUserPetIds(data),
    {
      onSuccess: () => {
        showToast({
          message: `User pet list updated successfully!`,
          type: 'success',
        });
      },
    }
  );

  const handleApproval = async () => {
    applicationMutation.mutate({ id: application!._id, status: 'approved' });
    petMutation.mutate({ id: petId, status: 'adopted', ownerId: userId || '' });
    userMutation.mutate({ id: userId || '', adoptedPetId: petId });
  };

  const handleReject = async () => {
    applicationMutation.mutate({ id: application!._id, status: 'rejected' });
    petMutation.mutate({ id: petId, status: 'available', ownerId: '' });
  };

  const handleToast = () => {
    showToast({
      message: `An decision has already been made!`,
      type: 'info',
    });
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
            colorScheme='teal'
            size='md'
            width='200px'
            onClick={
              application.status == 'pending' ? handleApproval : handleToast
            }
          >
            Approve application
          </Button>
          <Button
            colorScheme='red'
            size='md'
            width='200px'
            onClick={
              application.status == 'pending' ? handleReject : handleToast
            }
          >
            Reject application
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};
