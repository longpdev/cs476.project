import React, { useEffect, useState } from 'react';
import { Box, Button, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import PetDetail from '../../FindAPet/PetDetail';
import { useQuery } from 'react-query';
import { getApplicationById } from '../../../apiServices';
import { useParams } from 'react-router-dom';
import { ApplicationType } from './Applications';

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

  const [application, setApplication] = useState<ApplicationType | null>(null);
  console.log(data);
  console.log(application);
  useEffect(() => {
    if (data) {
      setApplication(data);
    }
  }, [data]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error loading application details</Text>;
  }

  if (!application) {
    return <Text>No application found</Text>;
  }

  return (
    <Box m={12}>
      <Heading textAlign='center'>Application Detail</Heading>
      <Box paddingTop={8}>
        <SimpleGrid columns={2}>
          <Box>
            <Heading textAlign={'center'} as={'h2'} size='lg'>
              Customer Information
            </Heading>
            <CustomerInfoRow
              title='Full Name:'
              value={`${application.firstName + ' ' + application.lastName}`}
            />
            <CustomerInfoRow title='Email: ' value={`${application.email}`} />
            <CustomerInfoRow
              title='Address: '
              value={`${application.address}`}
            />

            <CustomerInfoRow
              title='Phone Number: '
              value={`${application.phoneNumber}`}
            />
            <CustomerInfoRow
              title='Are you a pet owner? '
              value={`${application.petOwner}`}
            />
            <CustomerInfoRow
              title='Do you have any pets at home? '
              value={`${application.petsAtHome}`}
            />
            <CustomerInfoRow
              title='What type of home do you live in? '
              value={`${application.homeType}`}
            />
            <CustomerInfoRow
              title='Who will be responsible for the pet’s care? '
              value={`${application.petCareResponsible}`}
            />
            <CustomerInfoRow
              title='Are you prepared for the financial responsibilities of pet ownership? '
              value={`${application.financialPreparedness}`}
            />
            <CustomerInfoRow
              title='Why do you want to adopt a pet? '
              value={`${application.adoptionReason}`}
            />
          </Box>
          <Box>
            <Heading textAlign={'center'} as={'h2'} size='lg'>
              Pet Details
            </Heading>
            <PetDetail />
          </Box>
        </SimpleGrid>
      </Box>
      <Box paddingTop={8} display='flex' justifyContent='center'>
        <SimpleGrid columns={3} spacing={4}>
          <Button size='md' width='200px'>
            Back to Dashboard
          </Button>
          <Button colorScheme='green' size='md' width='200px'>
            Approve application
          </Button>
          <Button colorScheme='red' size='md' width='200px'>
            Reject application
          </Button>
        </SimpleGrid>
      </Box>
    </Box>
  );
};
