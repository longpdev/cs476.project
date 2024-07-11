// PetForm.tsx
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { PetType } from '../Pages/FindAPet';
import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';

interface PetFormProps {
  onSubmit: (data: FormData) => void;
  title: string;
  pet?: PetType;
}

const PetForm: React.FC<PetFormProps> = ({ onSubmit, title, pet }) => {
  const { register, handleSubmit, reset } = useForm<PetType>({
    defaultValues: pet,
  });

  useEffect(() => {
    reset(pet);
  }, [pet, reset]);

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setSelectedFiles((prevFiles) => [...prevFiles, ...Array.from(files)]);
    }
  };

  const submitForm = handleSubmit(async (data: PetType) => {
    const formData = new FormData();
    if (pet?._id) {
      formData.append('_id', pet._id);
    }
    formData.append('name', data.name);
    formData.append('breed', data.breed);
    selectedFiles.forEach((file) => {
      formData.append('imageFiles', file);
    });
    onSubmit(formData);
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
        {title}
      </Heading>
      <VStack>
        <form onSubmit={submitForm}>
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
            Submit
          </Button>
        </form>
      </VStack>
    </Box>
  );
};

export default PetForm;
