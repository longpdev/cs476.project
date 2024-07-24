import { Box, Text, Heading, Button } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { fetchPetById } from '../../apiServices';
import PetDetailCard from './PetDetailCard';
export interface Pet {
  _id: string;
  breed: string;
  imageURLs: string[];
  name: string;
  age: string;
  sex: string;
  category: string;
  description: string;
  trained: string;
  health: string;
  colour: string;
  height: string;
  weight: string;
  accommodative: string;
}

export default function PetDetail() {
  const { petId } = useParams<{ petId: string }>();
  const { data, isLoading, isError } = useQuery(
    ['getPetById', petId],
    () => fetchPetById(petId!),
    {
      enabled: !!petId,
    }
  );
  const [pet, setPet] = useState<Pet | null>(null);

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
          py={{ base: '5', lg: '5' }}
          size='2xl'
          textColor='#072a40'
        >
          {pet.name}
        </Heading>
        <PetDetailCard pet={pet} />
        <Box textAlign={'center'}>
          <Button
            width='25%'
            backgroundColor='blue.700'
            color='white'
            variant='solid'
            as={Link}
            to={`/PetAdoptionStep1/${pet._id}`}
          >
            {`Adopt ${pet.name}`}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
