import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchPetById, updatePetById } from '../apiServices';
import { useAppContext } from '../contexts/AppContext';
import PetForm from '../components/PetForm';

export const EditPet = () => {
  const { id } = useParams();
  const { showToast } = useAppContext();
  const { data: pet } = useQuery('fetchPetById', () => fetchPetById(id ?? ''));

  const mutation = useMutation((data: FormData) => updatePetById(data), {
    onSuccess: () => {
      showToast({ message: 'Pet updated successfully!', type: 'success' });
    },
    onError: () => {
      showToast({ message: 'Failed to update pet!', type: 'error' });
    },
  });

  const handleSubmit = (formData: FormData) => {
    mutation.mutate(formData);
  };

  return <PetForm pet={pet} onSubmit={handleSubmit} title="Editing pet" />;
};
