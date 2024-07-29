// PetSectionFactory.tsx
import React from 'react';
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import PetCard from '../components/PetCard';
import { PetType } from '../types/PetType';

interface PetSectionProps {
  pets: PetType[];
  isAdmin: boolean;
  title: string;
  filterStatus: 'available' | 'adopted' | 'pending';
}

const PetSectionBase: React.FC<PetSectionProps> = ({
  pets,
  isAdmin,
  title,
  filterStatus,
}) => {
  const filteredPets = pets.filter((pet) => pet.status === filterStatus);

  return (
    <Box ml={5} mt={10}>
      <Heading>{title}</Heading>
      <SimpleGrid columns={{ md: 2, lg: 3 }} spacing='4'>
        {filteredPets.length > 0 ? (
          filteredPets.map((pet) => (
            <PetCard key={pet._id} pet={pet} isAdmin={isAdmin} />
          ))
        ) : (
          <Text>No pets found</Text>
        )}
      </SimpleGrid>
    </Box>
  );
};

interface PetSectionFactoryProps {
  pets: PetType[];
  isAdmin: boolean;
  type: 'available' | 'adopted' | 'pending';
}

export const PetSectionFactory: React.FC<PetSectionFactoryProps> = ({
  pets,
  isAdmin,
  type,
}) => {
  const sectionProps = {
    pets,
    isAdmin,
    title: '',
    filterStatus: type,
  };

  switch (type) {
    case 'available':
      sectionProps.title = 'Available Pets';
      break;
    case 'adopted':
      sectionProps.title = 'Adopted Pets';
      break;
    case 'pending':
      sectionProps.title = 'Pending Pets';
      break;
    default:
      throw new Error('Unknown section type');
  }

  return <PetSectionBase {...sectionProps} />;
};
