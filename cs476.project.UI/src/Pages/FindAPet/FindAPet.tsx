import {
  Heading,
  SimpleGrid,
  Text,
  Input,
  Select,
  Box,
  Button,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { getAllPets } from '../../apiServices';
import { useQuery } from 'react-query';
import { useState, useEffect } from 'react';
import PetCard from '../../components/PetCard';
import { useAppContext } from '../../contexts/AppContext';
import { useNavigate } from 'react-router-dom';

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
  createdDate: string;
  status: 'available' | 'adopted' | 'pending';
};

export default function FindAPet() {
  const navigate = useNavigate();
  const { data, isError, isLoading } = useQuery('pets', getAllPets);
  const [pets, setPets] = useState<PetType[]>([]);
  const [searchName, setSearchName] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterSex, setFilterSex] = useState('');
  const { isAuthenticated, isAdmin } = useAppContext();

  useEffect(() => {
    if (data) {
      setPets(data);
    }
  }, [data]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
  };

  const handleFilterCategoryChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilterCategory(e.target.value);
  };

  const handleFilterSexChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterSex(e.target.value);
  };

  const filteredPets = pets.filter((pet) => {
    return (
      pet.name.toLowerCase().includes(searchName.toLowerCase()) &&
      (filterCategory ? pet.category === filterCategory : true) &&
      (filterSex ? pet.sex === filterSex : true)
    );
  });

  const sortedPets = filteredPets.sort(
    (a, b) =>
      new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
  );

  if (isLoading) return 'Loading...';
  if (isError) return <Text>Error loading pets</Text>;
  if (!pets.length) return <Text>No pets</Text>;

  return (
    <Box display='flex' flexDirection={'column'}>
      <Heading as='h1' size='3xl' textAlign='center' m='20'>
        Find A Pet
      </Heading>
      <Box display='flex' flexDirection='column' alignItems='center' mb='10'>
        <Box mb='4'>
          <Button
            mt={4}
            colorScheme='red'
            width='auto'
            size='lg'
            onClick={() => {
              isAuthenticated && isAdmin
                ? navigate('/AddPet')
                : navigate('/notAnAdmin');
            }}
          >
            Add Pet
          </Button>
        </Box>

        <SimpleGrid
          columns={{ base: 1, lg: 3 }}
          display={{ base: '', lg: 'flex' }}
          justifyContent='center'
          mb='10'
        >
          <Box>
            <Input
              placeholder='Search by name'
              value={searchName}
              onChange={handleSearchChange}
              width={{ base: '100%', lg: '300px' }}
              mr='10px'
              mt={{ base: '5', lg: '0' }}
            />
          </Box>
          <Box>
            <Select
              placeholder='Filter by category'
              value={filterCategory}
              onChange={handleFilterCategoryChange}
              width={{ base: '100%', lg: '200px' }}
              mr='10px'
              mt={{ base: '5', lg: '0' }}
            >
              <option value='Dog'>Dog</option>
              <option value='Cat'>Cat</option>
              <option value='Bird'>Bird</option>
            </Select>
          </Box>
          <Box>
            <Select
              placeholder='Filter by sex'
              value={filterSex}
              onChange={handleFilterSexChange}
              width={{ base: '100%', lg: '150px' }}
              mt={{ base: '5', lg: '0' }}
            >
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </Select>
          </Box>
        </SimpleGrid>
      </Box>
      {pets.find((pet) => pet.status == 'pending') && (
        <Box>
          <Heading ml={5}>Pending Pets</Heading>
          <Alert status='info' ml={5} mt={5} mb={5}>
            <AlertIcon />
            These pets are pending approval, but you can still make an adoption
            request
          </Alert>
        </Box>
      )}

      <Box ml={5}>
        <SimpleGrid columns={{ md: 2, lg: 3 }} spacing='4'>
          {sortedPets.length > 0 ? (
            sortedPets
              .filter((pet) => pet.status == 'pending')
              .map((pet) => (
                <PetCard key={pet._id} pet={pet} isAdmin={isAdmin} />
              ))
          ) : (
            <Text>No pets found</Text>
          )}
        </SimpleGrid>
      </Box>
      <Heading ml={5} mt={10}>
        Available Pets
      </Heading>
      <Box ml={5}>
        <SimpleGrid columns={{ md: 2, lg: 3 }} spacing='4'>
          {sortedPets.length > 0 ? (
            sortedPets
              .filter(
                (pet) => pet.status != 'pending' && pet.status != 'adopted'
              )
              .map((pet) => (
                <PetCard key={pet._id} pet={pet} isAdmin={isAdmin} />
              ))
          ) : (
            <Text>No pets found</Text>
          )}
        </SimpleGrid>
      </Box>
      <Heading ml={5} mt={10}>
        Archieved Pets
      </Heading>
      <Box ml={5}>
        <SimpleGrid columns={{ md: 2, lg: 3 }} spacing='4'>
          {sortedPets.length > 0 ? (
            sortedPets
              .filter((pet) => pet.status == 'adopted')
              .map((pet) => (
                <PetCard key={pet._id} pet={pet} isAdmin={isAdmin} />
              ))
          ) : (
            <Text>No pets found</Text>
          )}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
