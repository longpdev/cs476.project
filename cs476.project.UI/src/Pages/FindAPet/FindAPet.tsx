import {
  Heading,
  SimpleGrid,
  Text,
  Input,
  Select,
  Box,
} from '@chakra-ui/react';
import { getAllPets } from '../../apiServices';
import { useQuery } from 'react-query';
import { useState, useEffect } from 'react';
import PetCard from '../../components/PetCard';
import { useAppContext } from '../../contexts/AppContext';

export type PetType = {
  _id: string;
  name: string;
  breed: string;
  imageURLs: string[];
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
};

export default function FindAPet() {
  const { data, isError, isLoading } = useQuery('pets', getAllPets);
  const [pets, setPets] = useState<PetType[]>([]);
  const [searchName, setSearchName] = useState('');
  const [filterBreed, setFilterBreed] = useState('');
  const [filterSex, setFilterSex] = useState('');
  const { isAuthenticated } = useAppContext();
  useEffect(() => {
    if (data) {
      setPets(data);
    }
  }, [data]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
  };

  const handleFilterBreedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterBreed(e.target.value);
  };

  const handleFilterSexChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterSex(e.target.value);
  };

  const filteredPets = pets.filter((pet) => {
    return (
      pet.name.toLowerCase().includes(searchName.toLowerCase()) &&
      (filterBreed ? pet.breed === filterBreed : true) &&
      (filterSex ? pet.sex === filterSex : true)
    );
  });

  if (isLoading) return 'Loading...';
  if (isError) return <Text>Error loading pets</Text>;
  if (!pets.length) return <Text>No pets</Text>;

  return (
    <>
      <Heading as="h1" size="3xl" textAlign="center" m="20">
        Find A Pet
      </Heading>

      <Box display="flex" justifyContent="center" mb="10">
        <Input
          placeholder="Search by name"
          value={searchName}
          onChange={handleSearchChange}
          width="300px"
          mr="10px"
        />
        <Select
          placeholder="Filter by breed"
          value={filterBreed}
          onChange={handleFilterBreedChange}
          width="150px"
          mr="10px"
        >
          <option value="Labrador">Labrador</option>
          <option value="German Shepherd">German Shepherd</option>
          <option value="Bulldog">Bulldog</option>
          {/* Add more breeds as needed */}
        </Select>
        <Select
          placeholder="Filter by sex"
          value={filterSex}
          onChange={handleFilterSexChange}
          width="150px"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
      </Box>

      <SimpleGrid columns={{ md: 2, lg: 3 }} spacing="40px">
        {filteredPets.length > 0 ? (
          filteredPets.map((pet) => (
            <PetCard
              key={pet._id}
              pet={pet}
              isAuthenticated={isAuthenticated}
            />
          ))
        ) : (
          <Text>No pets found</Text>
        )}
      </SimpleGrid>
    </>
  );
}