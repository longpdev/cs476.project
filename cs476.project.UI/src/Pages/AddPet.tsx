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
  Textarea,
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
    formData.append('name', data.name);
    formData.append('breed', data.breed);
    formData.append('age', data.age);
    formData.append('sex', data.sex);
    formData.append('category', data.category);
    formData.append('description', data.description);
    formData.append('trained', data.trained);
    formData.append('characteristics', data.characterstics);
    formData.append('health', data.health);
    formData.append('colour', data.colour);
    formData.append('height', data.height);
    formData.append('weight', data.weight);
    formData.append('accommodative', data.accommodative);
    selectedFiles.forEach((file) => {
      formData.append('imageFiles', file);
    });

    try {
      await mutation.mutateAsync(formData);
      showToast({ message: 'Pet added successfully!', type: 'success' });
    } catch (error) {
      showToast({ message: 'Failed to add pet!', type: 'error' });
    }
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
          <FormLabel>Age</FormLabel>
          <Input
            type="text"
            {...register('age', { required: 'Age is required' })}
          />
          <FormLabel>Sex</FormLabel>
          <Input
            type="text"
            {...register('sex', { required: 'Sex is required' })}
          />
          <FormLabel>Category</FormLabel>
          <Input
            type="text"
            {...register('category', { required: 'Category is required' })}
          />
          <FormLabel>Description</FormLabel>
          <Textarea
            {...register('description', {
              required: 'Description is required',
            })}
          />
          <FormLabel>Trained</FormLabel>
          <Input
            type="text"
            {...register('trained', { required: 'Trained is required' })}
          />
          <FormLabel>Characteristics</FormLabel>
          <Textarea
            {...register('characterstics', {
              required: 'Characteristics is required',
            })}
          />
          <FormLabel>Health</FormLabel>
          <Input
            type="text"
            {...register('health', { required: 'Health is required' })}
          />
          <FormLabel>Colour</FormLabel>
          <Input
            type="text"
            {...register('colour', { required: 'Colour is required' })}
          />
          <FormLabel>Height</FormLabel>
          <Input
            type="text"
            {...register('height', { required: 'Height is required' })}
          />
          <FormLabel>Weight</FormLabel>
          <Input
            type="text"
            {...register('weight', { required: 'Weight is required' })}
          />
          <FormLabel>Accommodative</FormLabel>
          <Textarea
            {...register('accommodative', {
              required: 'Accommodative is required',
            })}
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
            Submit
          </Button>
        </form>
      </VStack>
    </Box>
  );
};

export default AddPet;
