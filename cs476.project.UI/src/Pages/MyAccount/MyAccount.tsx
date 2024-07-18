import { Box, Text } from '@chakra-ui/react';
import { useAppContext } from '../../contexts/AppContext';

export default function MyAccount() {
  const { userData } = useAppContext();
  
  return (
    <Box bg='yellow' w='100%' p={4} color='red'>
      <Text>User ID is {userData.id}</Text>
    </Box>
  );
}
