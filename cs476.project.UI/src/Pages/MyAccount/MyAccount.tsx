import { Box, Text } from '@chakra-ui/react';
import { useAppContext } from '../../contexts/AppContext';

export default function MyAccount() {
  const { userId } = useAppContext();

  if (!userId) {
    return <Text>Failed to fetch user information</Text>;
  }

  return (
    <Box bg="yellow" w="100%" p={4} color="red">
      <Text> UserID is{userId}</Text>
    </Box>
  );
}
