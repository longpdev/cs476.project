import { useMutation } from 'react-query';
import { useAppContext } from '../contexts/AppContext';
import { addPetApi } from '../apiServices';
import { useForm } from 'react-hook-form';
import { PetData } from '../types/petData';
import { useState } from 'react';
import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';

const AddPet = () => {
  const { showToast } = useAppContext();
  const { register, handleSubmit } = useForm<PetData>();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const mutation = useMutation(addPetApi, {
    onSuccess: () => {
      showToast({ message: 'Pet added successfully!', type: 'success' });
    },
    onError: () => {
      showToast({ message: 'Failed to add pet!', type: 'error' });
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setSelectedFiles((prevFiles) => [...prevFiles, ...Array.from(files)]);
    }
  };

  const onSubmit = handleSubmit(async (data: PetData) => {
    const formData = new FormData();
    console.log(data.name);
    formData.append('name', data.name);
    formData.append('breed', data.breed);
    selectedFiles.forEach((file) => {
      formData.append('imageFiles', file);
    });
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
    console.log(data);
    console.log(formData);
    mutation.mutate(formData);
  });

  return (
    <Box
      maxW="md"
      mx="auto"
      mt="8"
      border="1px"
      borderColor="gray.200"
      padding="20px"
    >
      <Heading as="h2" mb="6" textAlign="center">
        Adding new pet
      </Heading>
      <VStack>
        <form onSubmit={onSubmit}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            {...register('name', { required: 'Name is required' })}
          />
          <FormLabel>Breed</FormLabel>
          <Input
            type="text"
            {...register('breed', { required: 'Breed is required' })}
          />
          <FormLabel>Image</FormLabel>
          <Input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            title=""
          />
          <Button mt={4} colorScheme="teal" width="full" type="submit">
            Subdmit
          </Button>
        </form>
      </VStack>
    </Box>
  );
};

export default AddPet;
