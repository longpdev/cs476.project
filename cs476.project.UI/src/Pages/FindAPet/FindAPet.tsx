import {
  Heading,
  SimpleGrid,
  Text,
  Input,
  Select,
  Box,
  Button,
} from '@chakra-ui/react';
import { getAllPets } from '../../apiServices';
import { useQuery } from 'react-query';
import { useState, useEffect } from 'react';
import { useAppContext } from '../../contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import { PetType } from '../../types/PetType';
import { PetSectionFactory } from '../../factories/PetSectionFactory';

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
      <Heading as='h1' size='3xl' textAlign='center' m='10' color='teal.500'>
        Find A Pet
      </Heading>
      <Box display='flex' flexDirection='column' alignItems='center' mb='10'>
        <Box mb='4'>
          {isAuthenticated && (
            <Button
              mt={4}
              colorScheme={isAdmin ? 'red' : 'orange'}
              width='auto'
              size='lg'
              onClick={() => {
                isAuthenticated && isAdmin
                  ? navigate('/AddPet')
                  : navigate('/notAnAdmin');
              }}
            >
              {isAdmin ? 'Add Pet' : 'Onboard Your Pet'}
            </Button>
          )}
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
              borderColor='gray.300'
              focusBorderColor='teal.500'
              borderRadius='md'
              boxShadow='sm'
              _hover={{ borderColor: 'teal.400' }}
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
              borderColor='gray.300'
              focusBorderColor='teal.500'
              borderRadius='md'
              boxShadow='sm'
              _hover={{ borderColor: 'teal.400' }}
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
              borderColor='gray.300'
              focusBorderColor='teal.500'
              borderRadius='md'
              boxShadow='sm'
              _hover={{ borderColor: 'teal.400' }}
            >
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </Select>
          </Box>
        </SimpleGrid>
      </Box>

      {pets.some((pet) => pet.status === 'pending') && (
        <PetSectionFactory pets={sortedPets} type='pending' isAdmin={isAdmin} />
      )}
      <PetSectionFactory pets={sortedPets} type='available' isAdmin={isAdmin} />
      <PetSectionFactory pets={sortedPets} type='adopted' isAdmin={isAdmin} />
    </Box>
  );
}
