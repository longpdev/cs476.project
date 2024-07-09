import { Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { getAllPets } from '../apiServices';
import { useQuery } from 'react-query';
import { useState, useEffect } from 'react';
import PetCard from '../components/PetCard';

export type PetType = {
  _id: string;
  name: string;
  breed: string;
  imageURLs: string[];
};

export default function FindAPet() {
  const { data, isError, isLoading } = useQuery('pets', getAllPets);
  const [pets, setPets] = useState<PetType[]>([]);

  useEffect(() => {
    if (data) {
      setPets(data);
    }
  }, [data]);

  console.log('Pets data:', pets);
  console.log('Error:', isError);

  if (isLoading) return 'Loading...';
  if (isError) return <Text>Error loading pets</Text>;
  if (!pets.length) return <Text>No pets</Text>;

  const handleViewDetail = (id: string) => {
    console.log('View details for pet ID:', id);
  };

  return (
    <>
      <Heading as="h1" size="3xl" textAlign="center" m="20">
        Find A Pet
      </Heading>
      <SimpleGrid columns={{ md: 2, lg: 3 }} spacing="10px"></SimpleGrid>

      <SimpleGrid columns={{ md: 2, lg: 3 }} spacing="40px">
        {pets?.map((pet) => (
          <PetCard
            key={pet._id}
            pet={pet}
            handleViewDetail={handleViewDetail}
          />
        ))}
      </SimpleGrid>
    </>
  );
}
