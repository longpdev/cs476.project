// PetForm.tsx
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { PetType } from '../types/PetType';
import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  VStack,
  Textarea,
  Select,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface PetFormProps {
  onSubmit: (data: FormData) => void;
  title: string;
  pet?: PetType;
}

const PetForm: React.FC<PetFormProps> = ({ onSubmit, title, pet }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PetType>({
    defaultValues: pet,
  });

  useEffect(() => {
    reset(pet);
  }, [pet, reset]);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
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
    if (selectedFile) {
      formData.append('imageFile', selectedFile);
    }
    onSubmit(formData);
  });

  return (
    <Box
      maxW='md'
      mx='auto'
      mt='8'
      border='1px'
      borderColor='gray.200'
      padding='20px'
    >
      <Heading as='h2' mb='6' textAlign='center'>
        {title}
      </Heading>
      <VStack>
        <form onSubmit={submitForm}>
          <FormControl isRequired isInvalid={!!errors.name}>
            <FormLabel htmlFor='name'>Name</FormLabel>
            <Input
              type='text'
              placeholder='Enter pet name'
              {...register('name', {
                required: 'Name is required',
              })}
            />
            {errors.name && (
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.breed}>
            <FormLabel htmlFor='breed'>Breed</FormLabel>
            <Input
              type='text'
              placeholder='Enter pet breed'
              {...register('breed', {
                required: 'Breed is required',
              })}
            />
            {errors.breed && (
              <FormErrorMessage>{errors.breed?.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.age}>
            <FormLabel htmlFor='age'>Age</FormLabel>
            <Input
              type='text'
              placeholder='Enter pet age'
              {...register('age', {
                required: 'Age is required',
              })}
            />
            {errors.age && (
              <FormErrorMessage>{errors.age?.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.sex}>
            <FormLabel htmlFor='sex'>Sex</FormLabel>
            <Select {...register('sex', { required: 'Sex is required' })}>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </Select>
            {errors.sex && (
              <FormErrorMessage>{errors.sex?.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.category}>
            <FormLabel htmlFor='category'>Category</FormLabel>
            <Select
              {...register('category', { required: 'Category is required' })}
            >
              <option value='Cat'>Cat</option>
              <option value='Dog'>Dog</option>
              <option value='Bird'>Bird</option>
            </Select>
            {errors.category && (
              <FormErrorMessage>{errors.category?.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.description}>
            <FormLabel htmlFor='description'>Description</FormLabel>
            <Textarea
              placeholder='Enter pet description'
              {...register('description', {
                required: 'Description is required',
              })}
            />
            {errors.description && (
              <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.trained}>
            <FormLabel htmlFor='trained'>Trained</FormLabel>
            <Input
              type='text'
              placeholder='How well trained is the pet?'
              {...register('trained', {
                required: 'Training status is required',
              })}
            />
            {errors.trained && (
              <FormErrorMessage>{errors.trained?.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.health}>
            <FormLabel htmlFor='health'>Health</FormLabel>
            <Input
              type='text'
              placeholder='Enter health status'
              {...register('health', { required: 'Health status is required' })}
            />
            {errors.health && (
              <FormErrorMessage>{errors.health?.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.colour}>
            <FormLabel htmlFor='colour'>Colour</FormLabel>
            <Input
              type='text'
              placeholder='Enter pet colour'
              {...register('colour', { required: 'Colour is required' })}
            />
            {errors.colour && (
              <FormErrorMessage>{errors.colour?.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.height}>
            <FormLabel htmlFor='height'>Height</FormLabel>
            <Input
              type='text'
              placeholder='Enter pet height'
              {...register('height', { required: 'Height is required' })}
            />
            {errors.height && (
              <FormErrorMessage>{errors.height?.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.weight}>
            <FormLabel htmlFor='weight'>Weight</FormLabel>
            <Input
              type='text'
              placeholder='Enter pet weight'
              {...register('weight', { required: 'Weight is required' })}
            />
            {errors.weight && (
              <FormErrorMessage>{errors.weight?.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.accommodative}>
            <FormLabel htmlFor='accommodative'>Accommodative</FormLabel>
            <Input
              type='text'
              placeholder='Enter accommodation status'
              {...register('accommodative', {
                required: 'Accommodation status is required',
              })}
            />
            {errors.accommodative && (
              <FormErrorMessage>
                {errors.accommodative?.message}
              </FormErrorMessage>
            )}
          </FormControl>
          <FormLabel>Image</FormLabel>
          <Input
            type='file'
            accept='image/*'
            onChange={handleFileChange}
            title=''
          />
          <Button mt={4} colorScheme='teal' width='full' type='submit'>
            Submit
          </Button>
          <Button
            mt={4}
            colorScheme='red'
            width='full'
            onClick={() => {
              navigate('/FindAPet');
            }}
          >
            Cancel
          </Button>
        </form>
      </VStack>
    </Box>
  );
};

export default PetForm;
