// PetForm.tsx
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { PetType } from '../Pages/FindAPet/FindAPet';
import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  VStack,
  Textarea,
  Select,
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
    formData.append('age', data.age);
    formData.append('sex', data.sex);
    formData.append('category', data.category);
    formData.append('description', data.description);
    formData.append('trained', data.trained);
    formData.append('health', data.health);
    formData.append('colour', data.colour);
    formData.append('height', data.height);
    formData.append('weight', data.weight);
    formData.append('accommodative', data.accommodative);
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
          <FormLabel>Age</FormLabel>
          <Input
            type="text"
            {...register('age', { required: 'Age is required' })}
          />
          <FormLabel>Sex</FormLabel>
          <Select {...register('sex', { required: 'Sex is required' })}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
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
          <Input
            type="text"
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

export default PetForm;
