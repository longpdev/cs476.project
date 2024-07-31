import { Box, Text, Heading, Button } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { fetchPetById } from '../../apiServices';
import PetDetailCard from './PetDetailCard';
import { useAppContext } from '../../contexts/AppContext';
import { PetType } from '../../types/PetType';

export default function PetDetail() {
  const { petId } = useParams<{ petId: string }>();
  const { isAdmin, isAuthenticated } = useAppContext();
  const { data, isLoading, isError } = useQuery(
    ['getPetById', petId],
    () => fetchPetById(petId!),
    {
      enabled: !!petId,
    }
  );
  const [pet, setPet] = useState<PetType | null>(null);

  useEffect(() => {
    if (data) {
      setPet(data);
    }
  }, [data, petId]);

  if (isLoading) return <Text>'Loading...'</Text>;
  if (isError) return <Text>Error loading pets</Text>;
  if (!pet) return <Text>No pet found</Text>;

  return (
    <Box paddingTop={8} width='80%' mx='auto'>
      <Box>
        <Heading
          textAlign={'center'}
          py={{ base: '3', lg: '5' }}
          size='2xl'
          textColor='#072a40'
        >
          {pet.name}
        </Heading>
        <PetDetailCard pet={pet} />
        {pet.status != 'adopted' && (
          <Box textAlign={'center'} pb='3'>
            <Button
              width={{ base: '80%', lg: '25%' }}
              backgroundColor='blue.700'
              color='white'
              variant='solid'
              as={Link}
              to={
                isAdmin
                  ? `/notAUser`
                  : isAuthenticated
                  ? `/PetAdoptionStep1/${pet._id}`
                  : `/notAuthenticated`
              }
            >
              {`Adopt ${pet.name}`}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}
