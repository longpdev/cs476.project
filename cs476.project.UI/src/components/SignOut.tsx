import { Button } from '@chakra-ui/react';
import { signoutAPI } from '../apiServices';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';

export const SignOut = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const mutation = useMutation(signoutAPI, {
    onSuccess: () => {
      showToast({ message: 'Registration successful!', type: 'success' }),
        navigate('/AboutUs');
    },
    onError: (error: Error) =>
      showToast({ message: error.message, type: 'error' }),
  });

  const handleClick = () => mutation.mutate();

  return <Button onClick={handleClick}>sign out</Button>;
};
