import { useMutation } from 'react-query';
import { useAppContext } from '../../contexts/AppContext';
import { addPetApi } from '../../apiServices';
import PetForm from '../../components/PetForm';
import { useNavigate } from 'react-router-dom';

const AddPet = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const mutation = useMutation(addPetApi, {
    onSuccess: () => {
      showToast({ message: 'Pet added to system', type: 'success' });
      navigate('/FindAPet');
    },
    onError: () => {
      showToast({ message: 'Failed to add pet!', type: 'error' });
    },
  });

  const handleSubmit = (formData: FormData) => {
    mutation.mutate(formData);
  };

  return <PetForm onSubmit={handleSubmit} title="Adding new pet" />;
};

export default AddPet;
