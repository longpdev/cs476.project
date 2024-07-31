import { useMutation } from 'react-query';
import { useAppContext } from '../../contexts/AppContext';
import { addPetApi } from '../../apiServices';
import { useNavigate } from 'react-router-dom';
import PetFormFactory from '../../factories/PetFormFactory';

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

  return PetFormFactory.createPetForm({ type: 'add', onSubmit: handleSubmit });
};

export default AddPet;
